import { Observable } from "rxjs"


export abstract class SubjectsApi {
  abstract addSubject(data:any):Observable<any>
  abstract ubdateSubject(data:any):Observable<any>
  abstract deleteSubject(data:any):Observable<any>
  abstract getAllSubjects(data:any):Observable<any>
  abstract getSingleSubjects(data:any):Observable<any>

}
