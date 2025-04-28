import { ExamsEndPoint } from './enums/exams.API,endPoints';
import { Injectable } from '@angular/core';
import { ExamsApi } from './enums/ExamsApi';
import { HttpClient } from '@angular/common/http';
import { ExamsAPIAdaptorService } from './adaptor/exams-api.adaptor';
import { Router } from '@angular/router';
import { IAddExams } from './interface/interfaces-exams/iadd-exams';
import { IGetAllExams } from './interface/interfaces-exams/iget-all-exams';
import { catchError, map, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { IGetAllExamsOnSubject } from './interface/interfaces-exams/iget-all-exams-on-subject';
import { IGetExamsById } from './interface/interfaces-exams/iget-exams-by-id';

@Injectable({
  providedIn: 'root'
})
export class ExamsApiService implements ExamsApi {


  constructor(private _httpClient :HttpClient, private _examsAPIAdaptorService :ExamsAPIAdaptorService ,private _router:Router) { }
  userData:any;


    addExams(): Observable<IAddExams> {
          return this._httpClient.post(ExamsEndPoint.ADD_EXAMS).pipe(
            map ((res:any) => this._examsAPIAdaptorService.addExamsAdaptor(res)),
            catchError((err) => {
              throw err;
            }))}


      getAllExams(): Observable<IGetAllExams> {
          return this._httpClient.get(ExamsEndPoint.GET_ALL_EXAMS).pipe(
        map ((res:any) => this._examsAPIAdaptorService.getAllExamsAdaptor(res)),
        catchError((err) => {
          throw err;
        }))}


        getAllExamsOnSubject(): Observable<IGetAllExamsOnSubject> {
          return this._httpClient.get(ExamsEndPoint.GET_ALL_EXAMS_ON_SUBJECT).pipe(
        map ((res:any) => this._examsAPIAdaptorService.getAllExamsOnSubjectAdaptor(res)),
        catchError((err) => {
          throw err;
        }))}

        getExamsById(): Observable<IGetExamsById> {
          return this._httpClient.get(ExamsEndPoint.GET_EXAMS_BY_ID).pipe(
        map ((res:any) => this._examsAPIAdaptorService.getAllExamsByIdAdaptor(res)),
        catchError((err) => {
          throw err;
        }))}

        getUserData():void{
          this.userData =   jwtDecode(localStorage.getItem("token")!)
          console.log(this.userData);
        }


}
