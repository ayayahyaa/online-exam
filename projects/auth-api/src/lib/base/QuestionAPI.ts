import { Observable } from 'rxjs';
import { QuestionsAdaptResponse } from '../../../../../src/app/core/interfaces-question/question-interfaces';

export abstract class QuestionsAPI {
  abstract allQuestions(): Observable<QuestionsAdaptResponse>;
  abstract allQuestionsOnExam(
    examId: string
  ): Observable<QuestionsAdaptResponse>;
}
