import { Observable } from 'rxjs';
import { ExamsAdaptResponse,
} from '../../../../../src/app/core/interfaces-exam/exam-interfaces';

export abstract class ExamsAPI {
  abstract allExams(): Observable<ExamsAdaptResponse>;
  abstract allExamsBySubject(subjectId: string): Observable<ExamsAdaptResponse>;
}
