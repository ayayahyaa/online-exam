import { Injectable } from '@angular/core';
import { SubjectsApi } from './base/SubjectsAPI';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SubjectAPIAdaptorService } from './adaptor/subject-api.adaptor';
import { IAddSubjectDataTs } from './interface/interfaces-subjects/iadd-subject-data.ts';
import { SubjectsEndPoint } from './enums/subjectsAPI.endPoints';
import { catchError, map, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { IUpdateSubjectDataTs } from './interface/interfaces-subjects/iupdate-subject-data.ts';
import { IDeleteSubjectDataTs } from './interface/interfaces-subjects/idelete-subject-data.ts';
import { IGetAllSubjectDataTs } from './interface/interfaces-subjects/iget-all-subject-data.ts';
import { IGetSingleSubjectSubjectDataTs } from './interface/interfaces-subjects/iget-single-subject-subject-data.ts';

@Injectable({
  providedIn: 'root'
})
export class SubjectApiService implements SubjectsApi {

  constructor(private _httpClient :HttpClient, private _subjectAPIAdaptorService :SubjectAPIAdaptorService ,private _router:Router) { }
  userData:any;



  addSubject(): Observable<IAddSubjectDataTs> {
        return this._httpClient.get(SubjectsEndPoint.ADD_SUBJECT).pipe(
          map ((res:any) => this._subjectAPIAdaptorService.addSubjectAdaptor(res)),
          catchError((err) => {
            throw err;
          }))}


  ubdateSubject(): Observable<IUpdateSubjectDataTs> {
        return this._httpClient.get(SubjectsEndPoint.UPDATE_SUBJECT).pipe(
      map ((res:any) => this._subjectAPIAdaptorService.ubdateSubjectAdaptor(res)),
      catchError((err) => {
        throw err;
      }))}


      deleteSubject(): Observable<IDeleteSubjectDataTs> {
        return this._httpClient.delete(SubjectsEndPoint.DELETE_SUBJECT).pipe(
      map ((res:any) => this._subjectAPIAdaptorService.deleteSubjectAdaptor(res)),
      catchError((err) => {
        throw err;
      }))}



      getAllSubjects(): Observable<IGetAllSubjectDataTs> {
        return this._httpClient.get(SubjectsEndPoint.GET_ALL_SUBJECTS).pipe(
      map ((res:any) => this._subjectAPIAdaptorService.getAllSubjectsAdaptor(res)),
      catchError((err) => {
        throw err;
      }))}


      getSingleSubjects(): Observable<IGetSingleSubjectSubjectDataTs> {
        return this._httpClient.get(SubjectsEndPoint.GET_SINGLE_SUBJECTS).pipe(
      map ((res:any) => this._subjectAPIAdaptorService.getSingleSubjectsAdaptor(res)),
      catchError((err) => {
        throw err;
      }))}

      getUserData():void{
        this.userData =   jwtDecode(localStorage.getItem("token")!)
        console.log(this.userData);
      }




}
