import { Injectable } from '@angular/core';

import { IadaptorSubjects } from '../interface/interfaces-subjects/IadaptorSubjects';
import { IAddSubjectDataTs } from '../interface/interfaces-subjects/iadd-subject-data.ts';
import { IUpdateSubjectDataTs } from '../interface/interfaces-subjects/iupdate-subject-data.ts';
import { IDeleteSubjectDataTs } from '../interface/interfaces-subjects/idelete-subject-data.ts';
import { IGetAllSubjectDataTs } from '../interface/interfaces-subjects/iget-all-subject-data.ts';
import { IGetSingleSubjectSubjectDataTs } from '../interface/interfaces-subjects/iget-single-subject-subject-data.ts';

@Injectable({
  providedIn: 'root'
})
export class SubjectAPIAdaptorService implements IadaptorSubjects {

  constructor() { }

  addSubjectAdaptor(data:IAddSubjectDataTs): IAddSubjectDataTs{
    return {
      message:data.message,
    }
  }

  ubdateSubjectAdaptor(data:IUpdateSubjectDataTs): IUpdateSubjectDataTs{
    return {
      message:data.message,
    }
  }


  deleteSubjectAdaptor(data:IDeleteSubjectDataTs): IDeleteSubjectDataTs{
    return{
      message:data.message,
    }
  }

  getAllSubjectsAdaptor(data:IGetAllSubjectDataTs): IGetAllSubjectDataTs {
    return{
      message:data.message,
    }
  }

  getSingleSubjectsAdaptor(data: IGetSingleSubjectSubjectDataTs): IGetSingleSubjectSubjectDataTs {
    return{
      message:data.message,
    }}

}
