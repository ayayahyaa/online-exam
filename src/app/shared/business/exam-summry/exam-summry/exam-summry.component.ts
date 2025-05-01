import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { QuestionAdapt } from '../../../../../app/core/interfaces-question/question-interfaces';
import * as QuestionSelectors from '../../../../store/question/question.selector';
import * as QuestionActions from '../../../../store/question/question.action';
import * as ExamActions from '../../../../store/exam/exam.action';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-exam-summry',
  imports: [AsyncPipe],
  templateUrl: './exam-summry.component.html',
  styleUrl: './exam-summry.component.scss'
})
export class ExamSummryComponent implements OnInit  {



   // wrongQuestions: QuestionAdapt[] = [] as QuestionAdapt[];

   wrongQuestions$!: Observable<QuestionAdapt[]>;

   private readonly _store = inject(Store);

   getWrongQuestions() {
     // this._store.select(QuestionSelectors.selectWrongQuestions).subscribe({
     //   next: (dataList) => {
     //     this.wrongQuestions = dataList;
     //   },
     // });

     this.wrongQuestions$ = this._store.select(
       QuestionSelectors.selectWrongQuestions
     );
   }

   closeModal() {
     // Clear Exam State
     this._store.dispatch(ExamActions.resetExamState());
     //Clear Question State
     this._store.dispatch(QuestionActions.resetQuestionState());
   }

   ngOnInit(): void {
     this.getWrongQuestions();
   }
 }
