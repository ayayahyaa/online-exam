import { Injectable } from '@angular/core';
import { IAddSubjectDataTs } from '../interface/interfaces-subjects/iadd-subject-data.ts';
import { IAddExams } from '../interface/interfaces-exams/iadd-exams';
import { IGetAllExams } from '../interface/interfaces-exams/iget-all-exams';
import { IGetAllExamsOnSubject } from '../interface/interfaces-exams/iget-all-exams-on-subject';
import { IGetExamsById } from '../interface/interfaces-exams/iget-exams-by-id';
import { IadaptorExamsQuestion } from '../interface/iadaptor-question.js';
import { IaddQuestionData } from '../interface/interfaces-question/iadd-question-data.js';
import { IGetAllQuestionData } from '../interface/interfaces-question/iget-all-question-data.js';
import { IGetAllQuestionOnExamstData } from '../interface/interfaces-question/iget-all-question-on-subject-data.js';
import { IGetUserHistoryData } from '../interface/interfaces-question/iget-user-history-data.js';
import { IGetSingleQuestionData } from '../interface/interfaces-question/iget-single-question-data.js';
import { ICheckQuesionData } from '../interface/interfaces-question/icheck-quesion-data.js';

@Injectable({
  providedIn: 'root'
})
export class QuestionsAPIAdaptorService implements IadaptorExamsQuestion {

  constructor() { }

  addQuestionAdaptor(data:IaddQuestionData): IaddQuestionData{
    return {
      message:data.message,
    }
  }

  getAllQuestionAdaptor(data:IGetAllQuestionData): IGetAllQuestionData{
    return {
      message:data.message,
    }
  }


  getAllQuestionOnExamsAdaptor(data:IGetAllQuestionOnExamstData): IGetAllQuestionOnExamstData{
    return{
      message:data.message,
    }
  }

  getUserHistoryAdaptor(data:IGetUserHistoryData): IGetUserHistoryData {
    return{
      message:data.message,
    }
  }

  getSingleQuestionAdaptor(data:IGetSingleQuestionData): IGetSingleQuestionData{
    return{
      message:data.message,
    }
  }

  CheckQuestionAdaptor(data:ICheckQuesionData): ICheckQuesionData{
    return{
      message:data.message,
    }
  }

}
