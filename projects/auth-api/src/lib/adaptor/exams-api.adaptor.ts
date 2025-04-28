import { Injectable } from '@angular/core';
import { IAddSubjectDataTs } from '../interface/interfaces-subjects/iadd-subject-data.ts';
import { IadaptorExams } from '../interface/interfaces-exams/iadaptorExams';
import { IAddExams } from '../interface/interfaces-exams/iadd-exams';
import { IGetAllExams } from '../interface/interfaces-exams/iget-all-exams';
import { IGetAllExamsOnSubject } from '../interface/interfaces-exams/iget-all-exams-on-subject';
import { IGetExamsById } from '../interface/interfaces-exams/iget-exams-by-id';

@Injectable({
  providedIn: 'root'
})
export class ExamsAPIAdaptorService implements IadaptorExams {

  constructor() { }

  addExamsAdaptor(data:IAddExams): IAddSubjectDataTs{
    return {
      message:data.message,
    }
  }

  getAllExamsAdaptor(data:IGetAllExams): IGetAllExams{
    return {
      message:data.message,
    }
  }


  getAllExamsOnSubjectAdaptor(data:IGetAllExamsOnSubject): IGetAllExamsOnSubject{
    return{
      message:data.message,
    }
  }

  getAllExamsByIdAdaptor(data:IGetExamsById): IGetExamsById {
    return{
      message:data.message,
    }
  }

}
