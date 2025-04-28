import { ExamsEndPoint } from './enums/exams.API,endPoints';
import { Injectable } from '@angular/core';
import { ExamsApi } from './enums/ExamsApi';
import { HttpClient } from '@angular/common/http';
import { ExamsAPIAdaptorService } from './adaptor/exams-api.adaptor';
import { Router } from '@angular/router';
import { catchError, map, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { IGetAllExamsOnSubject } from './interface/interfaces-exams/iget-all-exams-on-subject';

@Injectable({
  providedIn: 'root'
})
export class ExamsApiService implements ExamsApi {


  constructor(private _httpClient :HttpClient, private _examsAPIAdaptorService :ExamsAPIAdaptorService ,private _router:Router) { }



        getAllExamsOnSubject(): Observable<IGetAllExamsOnSubject> {
          return this._httpClient.get(ExamsEndPoint.GET_ALL_EXAMS_ON_SUBJECT).pipe(
        map ((res:any) => this._examsAPIAdaptorService.getAllExamsOnSubjectAdaptor(res)),
        catchError((err) => {
          throw err;
        }))}



}
