import { inject, Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { map, switchMap, tap, withLatestFrom } from 'rxjs';
import * as QuestionActions from './question.action';
import * as QuestionSelectors from '../question/question.selector';
import * as ExamActions from '../exam/exam.action';
import { Store } from '@ngrx/store';
import { QuestionApiService } from '../../../../projects/auth-api/src/lib/question-api.service';

@Injectable()
export class QuestionsEffects {
  private readonly _actions$ = inject(Actions);
  private readonly _questionApiService = inject(QuestionApiService);
  private readonly _store = inject(Store);

  // mapping to a different action
  readonly loadQuestionsEffect$ = createEffect(() =>
    this._actions$.pipe(
      ofType(QuestionActions.loadQuestions),
      switchMap((action) =>
        this._questionApiService.getAllQuestionOmExams(action.examId).pipe(
          tap((action) => console.log(action)),
          map((dataRes) => {
            tap((dataRes) => console.log('The data : ', dataRes));
            return QuestionActions.setQuestions({
              questions: dataRes.questions,
            });
          })
        )
      )
    )
  );

  readonly setQuestionsEffect$ = createEffect(() =>
    this._actions$.pipe(
      ofType(QuestionActions.setQuestions),
      map(() => {
        return ExamActions.updateExamStatus({ status: 'Started' });
      })
    )
  );

  readonly setQuestionEffect2$ = createEffect(() =>
    this._actions$.pipe(
      ofType(QuestionActions.setQuestions),
      withLatestFrom(this._store.select(QuestionSelectors.selectQuestions)),
      map(([action, questionList]) =>
        QuestionActions.setCurrentQuestion({ question: questionList[0] })
      )
    )
  );

  readonly setCurrentQuestionEffect$ = createEffect(() =>
    this._actions$.pipe(
      ofType(QuestionActions.setCurrentQuestion),
      map(() => ExamActions.toggleModal())
    )
  );

  readonly setWrongQuestionsEffect$ = createEffect(() =>
    this._actions$.pipe(
      ofType(QuestionActions.setWrongQuestions),
      withLatestFrom(this._store.select(QuestionSelectors.selectQuestions)),
      tap(([_, dataList]) => {
        console.log('========= Result ===========');
        console.log(dataList);
      }),
      map(() => ExamActions.updateExamStatus({ status: 'Completed' }))
    )
  );
}
