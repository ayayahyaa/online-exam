import { IAddSubjectDataTs } from "./iadd-subject-data.ts";
import { IDeleteSubjectDataTs } from "./idelete-subject-data.ts";
import { IGetAllSubjectDataTs } from "./iget-all-subject-data.ts";
import { IGetSingleSubjectSubjectDataTs } from "./iget-single-subject-subject-data.ts";
import { IUpdateSubjectDataTs } from "./iupdate-subject-data.ts";

export interface IadaptorSubjects {
  addSubjectAdaptor(data:IAddSubjectDataTs):IAddSubjectDataTs,
  ubdateSubjectAdaptor(data:IUpdateSubjectDataTs):IUpdateSubjectDataTs,
  deleteSubjectAdaptor(data:IDeleteSubjectDataTs):IDeleteSubjectDataTs,
  getAllSubjectsAdaptor(data:IGetAllSubjectDataTs):IGetAllSubjectDataTs,
  getSingleSubjectsAdaptor(data:IGetSingleSubjectSubjectDataTs):IGetSingleSubjectSubjectDataTs,

}
