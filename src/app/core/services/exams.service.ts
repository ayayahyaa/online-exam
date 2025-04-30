import { inject, Injectable } from '@angular/core';
import { ExamsAPI } from '../../../../projects/auth-api/src/lib/enums/ExamsApi';
import { HttpClient } from '@angular/common/http';
import { MainAPIAdapter } from '../adaptor/main-adaptor';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ExamsAdaptResponse, ExamsResponse } from '../interfaces-exam/exam-interfaces';
import { ExamsEndPoint } from '../../../../projects/auth-api/src/lib/enums/exams.API,endPoints';
import { ErrorResponse } from '../interfaces/error';
import { environment } from '../../env/env';

@Injectable({
  providedIn: 'root'
})
export class ExamsService implements ExamsAPI {

  private readonly _httpClient = inject(HttpClient);
  private readonly _mainAPIAdapter = inject(MainAPIAdapter);

  allExams(): Observable<ExamsAdaptResponse> {
    return this._httpClient
      .get<ExamsResponse>(environment.apiUrl + '/' + ExamsEndPoint.GET_ALL_EXAMS)
      .pipe(
        map((res: ExamsResponse) => this._mainAPIAdapter.examAdapter(res)),
        catchError((err: ErrorResponse) => throwError(() => err))
      );
  }

  allExamsBySubject(subjectId: string): Observable<ExamsAdaptResponse> {
    return this._httpClient
      .get<ExamsResponse>(
        environment.apiUrl + '/' + ExamsEndPoint.GET_ALL_EXAMS_ON_SUBJECT + subjectId
      )
      .pipe(
        map((res: ExamsResponse) => this._mainAPIAdapter.examAdapter(res)),
        catchError((err: ErrorResponse) => throwError(() => err))
      );
  }
}
