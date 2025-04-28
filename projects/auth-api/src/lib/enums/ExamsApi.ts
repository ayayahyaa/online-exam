import { Observable } from "rxjs"


export abstract class ExamsApi {
  abstract getAllExamsOnSubject(data:any):Observable<any>
}
