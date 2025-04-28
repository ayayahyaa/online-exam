import { Observable } from "rxjs"


export abstract class QuestiontApi {

  abstract getAllQuestionOmExams(data:any):Observable<any>

}
