import { Injectable } from '@angular/core';

import { IadaptorSubjects } from '../interface/interfaces-subjects/IadaptorSubjects';
import { IGetAllSubjectData } from '../interface/interfaces-subjects/iget-all-subject-data.ts';

@Injectable({
  providedIn: 'root'
})
export class SubjectAPIAdaptorService implements IadaptorSubjects {

  constructor() { }


  getAllSubjectsAdaptor(data:IGetAllSubjectData): IGetAllSubjectData {
    return{
      message:data.message,
      metadata:data.metadata,
      subjects:data.subjects

    }
  }



}
