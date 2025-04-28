import { IAddExams } from "./iadd-exams";
import { IGetAllExams } from "./iget-all-exams";
import { IGetAllExamsOnSubject } from "./iget-all-exams-on-subject";
import { IGetExamsById } from "./iget-exams-by-id";


export interface IadaptorExams {
  addExamsAdaptor(data:IAddExams):IAddExams,
  getAllExamsAdaptor(data:IGetAllExams):IGetAllExams,
  getAllExamsOnSubjectAdaptor(data:IGetAllExamsOnSubject):IGetAllExamsOnSubject,
  getAllExamsByIdAdaptor(data:IGetExamsById):IGetExamsById,

}
