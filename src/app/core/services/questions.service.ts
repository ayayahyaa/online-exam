import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { QuestionsAPI } from '../../../../projects/auth-api/src/lib/base/QuestionAPI';
import { MainAPIAdapter } from '../adaptor/main-adaptor';
import { QuestionsAdaptResponse, QuestionsResponse } from '../interfaces-question/question-interfaces';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ErrorResponse } from '../interfaces/error';
import { QuestionEndPoint } from '../../../../projects/auth-api/src/lib/enums/question.API.endPoints';
import { environment } from '../../env/env';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService implements QuestionsAPI {

  private readonly _httpClient = inject(HttpClient);
  private readonly _mainAPIAdapter = inject(MainAPIAdapter);

  allQuestions(): Observable<QuestionsAdaptResponse> {
    return this._httpClient
      .get<QuestionsResponse>(environment.apiUrl + '/' + QuestionEndPoint.GET_ALL_QUESTION)
      .pipe(
        map((res: QuestionsResponse) =>
          this._mainAPIAdapter.questionAdapter(res)
        ),
        catchError((err: ErrorResponse) => throwError(() => err))
      );
  }
  allQuestionsOnExam(examId: string): Observable<QuestionsAdaptResponse> {
    return this._httpClient
      .get<QuestionsResponse>(
        environment.apiUrl + '/' + QuestionEndPoint.GET_ALL_QUESTION_ON_EXAMS + examId
      )
      .pipe(
        map((res: QuestionsResponse) =>
          this._mainAPIAdapter.questionAdapter(res)
        ),
        catchError((err: ErrorResponse) => throwError(() => err))
      );
  }
}
