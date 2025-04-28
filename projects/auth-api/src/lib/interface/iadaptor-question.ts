import { IaddQuestionData } from "./interfaces-question/iadd-question-data";
import { ICheckQuesionData } from "./interfaces-question/icheck-quesion-data";
import { IGetAllQuestionData } from "./interfaces-question/iget-all-question-data";
import { IGetAllQuestionOnExamstData } from "./interfaces-question/iget-all-question-on-subject-data";
import { IGetSingleQuestionData } from "./interfaces-question/iget-single-question-data";
import { IGetUserHistoryData } from "./interfaces-question/iget-user-history-data";


export interface IadaptorExamsQuestion {
  addQuestionAdaptor(data:IaddQuestionData):IaddQuestionData,
  getAllQuestionAdaptor(data:IGetAllQuestionData):IGetAllQuestionData,
  getAllQuestionOnExamsAdaptor(data:IGetAllQuestionOnExamstData):IGetAllQuestionOnExamstData,
  getUserHistoryAdaptor(data:IGetUserHistoryData):IGetUserHistoryData,
  getSingleQuestionAdaptor(data:IGetSingleQuestionData):IGetSingleQuestionData,
  CheckQuestionAdaptor(data:ICheckQuesionData):ICheckQuesionData,

}
