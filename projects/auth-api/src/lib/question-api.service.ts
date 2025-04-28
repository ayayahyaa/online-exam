import { Injectable } from '@angular/core';
import { QuestiontApi } from './base/QuestionAPI';
import { HttpClient } from '@angular/common/http';
import { QuestionsAPIAdaptorService } from './adaptor/question-api.adaptor';
import { Router } from '@angular/router';
import { IaddQuestionData } from './interface/interfaces-question/iadd-question-data';
import { QuestionEndPoint } from './enums/question.API.endPoints';
import { catchError, map, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { IGetAllQuestionData } from './interface/interfaces-question/iget-all-question-data';
import { IGetAllQuestionOnExamstData } from './interface/interfaces-question/iget-all-question-on-subject-data';
import { IGetUserHistoryData } from './interface/interfaces-question/iget-user-history-data';
import { IGetSingleQuestionData } from './interface/interfaces-question/iget-single-question-data';
import { ICheckQuesionData } from './interface/interfaces-question/icheck-quesion-data';

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
