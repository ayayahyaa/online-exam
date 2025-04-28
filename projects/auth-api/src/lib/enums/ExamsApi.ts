import { Observable } from "rxjs"


export abstract class ExamsApi {
  abstract addExams(data:any):Observable<any>
  abstract getAllExams(data:any):Observable<any>
  abstract getAllExamsOnSubject(data:any):Observable<any>
  abstract getExamsById(data:any):Observable<any>

}
