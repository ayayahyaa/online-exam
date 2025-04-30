import { Observable } from "rxjs";
import { Subject } from "../../../../../src/app/core/interfaces-subject/subject-interfaces";



export abstract class SubjectsApi {
  abstract getAllSubject(data:Subject):Observable<Subject>
}
