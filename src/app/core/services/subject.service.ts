import { Subject } from './../interfaces-subject/subject-interfaces';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainAPIAdapter } from '../adaptor/main-adaptor';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../env/env';
import { SubjectEndPoint } from '../../../../projects/auth-api/src/lib/enums/subjectApi.endPoint';
import { ErrorResponse } from '../interfaces/error';
import { SubjectsApi } from '../../../../projects/auth-api/src/lib/base/SubjectsAPI';
import { ExamsEndPoint } from '../../../../projects/auth-api/src/lib/enums/exams.API,endPoints';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class SubjectService implements SubjectsApi {
      private readonly _httpClient = inject(HttpClient);
      private readonly _mainAPIAdapter = inject(MainAPIAdapter);

      getAllSubject(): Observable<Subject[]> {
        return this._httpClient
          .get<{subjects: Subject []}>(environment.apiUrl + '/' + SubjectEndPoint.GET_ALL_SUBJECT)
          .pipe(
            map((res) => this._mainAPIAdapter.subjectListAdaptor(res.subjects)),
            catchError((err: ErrorResponse) => throwError(() => err))
          );
      }
      getExamBySubjectId(subjectId: string): Observable<any> {
        return this._httpClient.get(`${environment.apiUrl}/${ExamsEndPoint.GET_EXAMS_BY_ID}/${subjectId}`);
      }
  }
