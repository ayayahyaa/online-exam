import { Injectable } from '@angular/core';
import { IadaptorExams } from '../interface/interfaces-exams/iadaptorExams';
import { IGetAllExamsOnSubject } from '../interface/interfaces-exams/iget-all-exams-on-subject';

@Injectable({
  providedIn: 'root'
})
export class ExamsAPIAdaptorService implements IadaptorExams {

  constructor() { }


  getAllExamsOnSubjectAdaptor(data:IGetAllExamsOnSubject): IGetAllExamsOnSubject{
    return{
      message:data.message,
    }
  }


}
