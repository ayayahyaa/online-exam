import { Observable } from "rxjs"


export abstract class SubjectsApi {
  abstract getAllSubjects(data:any):Observable<any>
}
