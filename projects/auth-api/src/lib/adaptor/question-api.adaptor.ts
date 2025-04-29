import { Metadata } from './../interface/interfaces-subjects/iget-all-subject-data.ts';
import { Injectable } from '@angular/core';
import { IadaptorExamsQuestion } from '../interface/iadaptor-question.js';
import { IGetAllQuestionOnExamstData } from '../interface/interfaces-question/iget-all-question-on-subject-data.js';


@Injectable({
  providedIn: 'root'
})
export class QuestionsAPIAdaptorService implements IadaptorExamsQuestion {

  constructor() { }

  getAllQuestionOnExamsAdaptor(data:IGetAllQuestionOnExamstData): IGetAllQuestionOnExamstData{
    return{
      message:data.message,
      questions:data.questions,
    }
  }



}
