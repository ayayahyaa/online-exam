import { Injectable } from '@angular/core';
import { SubjectsApi } from './base/SubjectsAPI';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SubjectAPIAdaptorService } from './adaptor/subject-api.adaptor';
import { SubjectsEndPoint } from './enums/subjectsAPI.endPoints';
import { catchError, map, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { IGetAllSubjectData } from './interface/interfaces-subjects/iget-all-subject-data.ts';

@Injectable({
  providedIn: 'root'
})
export class SubjectApiService implements SubjectsApi {

  constructor(private _httpClient :HttpClient, private _subjectAPIAdaptorService :SubjectAPIAdaptorService ,private _router:Router) { }


      getAllSubjects(): Observable<IGetAllSubjectData> {
        return this._httpClient.get(SubjectsEndPoint.GET_ALL_SUBJECTS).pipe(
      map ((res:any) => this._subjectAPIAdaptorService.getAllSubjectsAdaptor(res)),
      catchError((err) => {
        throw err;
      }))}




}
