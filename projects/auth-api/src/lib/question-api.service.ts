import { Injectable } from '@angular/core';
import { QuestiontApi } from './base/QuestionAPI';
import { HttpClient } from '@angular/common/http';
import { QuestionsAPIAdaptorService } from './adaptor/question-api.adaptor';
import { Router } from '@angular/router';
import { QuestionEndPoint } from './enums/question.API.endPoints';
import { catchError, map, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { IGetAllQuestionOnExamstData } from './interface/interfaces-question/iget-all-question-on-subject-data';

@Injectable({
  providedIn: 'root'
})
export class QuestionApiService implements QuestiontApi {


  constructor(private _httpClient :HttpClient, private _questionsAPIAdaptorService :QuestionsAPIAdaptorService ,private _router:Router) { }


  getAllQuestionOmExams(): Observable<IGetAllQuestionOnExamstData> {
            return this._httpClient.get(QuestionEndPoint.GET_ALL_QUESTION_ON_EXAMS).pipe(
              map ((res:any) => this._questionsAPIAdaptorService.getAllQuestionOnExamsAdaptor(res)),
              catchError((err) => {
                throw err;
              }))}


}
