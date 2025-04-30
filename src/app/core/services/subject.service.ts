import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainAPIAdapter } from '../adaptor/main-adaptor';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../env/env';
import { SubjectEndPoint } from '../../../../projects/auth-api/src/lib/enums/subjectApi.endPoint';
import { ErrorResponse } from '../interfaces/error';
import { SubjectsApi } from '../../../../projects/auth-api/src/lib/base/SubjectsAPI';
import { Subject } from '../interfaces-subject/subject-interfaces';

@Injectable({
  providedIn: 'root'
})
export class SubjectService implements SubjectsApi {
      private readonly _httpClient = inject(HttpClient);
      private readonly _mainAPIAdapter = inject(MainAPIAdapter);

      getAllSubject(): Observable<Subject> {
        return this._httpClient
          .get<Subject>(environment.apiUrl + '/' + SubjectEndPoint.GET_ALL_SUBJECT)
          .pipe(
            map((res: Subject) => this._mainAPIAdapter.subjectAdapter(res)),
            catchError((err: ErrorResponse) => throwError(() => err))
          );
      }
  }
