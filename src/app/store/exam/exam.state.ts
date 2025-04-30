export type exmStatus =
  | 'Not Started'
  | 'Started'
  | 'Completed'
  | 'Review Answers'
  | 'Closed';

export interface ExamState {
  examStatus: exmStatus;
  isExamModalOpen: boolean;
}
