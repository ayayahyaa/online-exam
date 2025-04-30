import { ExamsAdaptResponse, ExamsResponse } from '../interfaces-exam/exam-interfaces';
import {
  QuestionsAdaptResponse,
  QuestionsResponse,
} from '../interfaces-question/question-interfaces';

export interface Adapter {
  examAdapter(data: ExamsResponse): ExamsAdaptResponse;
  questionAdapter(data: QuestionsResponse): QuestionsAdaptResponse;
}
