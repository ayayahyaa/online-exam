import { Observable } from "rxjs"


export abstract class QuestiontApi {
  abstract addQuestion(data:any):Observable<any>
  abstract getAllQuestion(data:any):Observable<any>
  abstract getAllQuestionOmExams(data:any):Observable<any>
  abstract getUserHistory(data:any):Observable<any>
  abstract getSingleQuestion(data:any):Observable<any>
  abstract checkQuestion(data:any):Observable<any>

}
