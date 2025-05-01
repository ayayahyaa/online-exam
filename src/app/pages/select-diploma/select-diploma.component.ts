import { Component, inject, OnInit } from '@angular/core';
import { CustomModalComponent } from '../../shared/ui/custom-modal/custom-modal.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { exmStatus } from '../../store/exam/exam.state';
import * as QuestionActions from '../../store/question/question.action';
import * as ExamSelectors from '../../store/exam/exam.selector';
import { AsyncPipe } from '@angular/common';
import { ExamComponent } from '../../shared/business/exam/exam/exam.component';
import { ExamScoreComponent } from '../../shared/business/exam-score/exam-score/exam-score.component';
import { ExamSummryComponent } from '../../shared/business/exam-summry/exam-summry/exam-summry.component';

@Component({
  selector: 'app-select-diploma',
  imports: [CustomModalComponent ,AsyncPipe,ExamComponent,ExamScoreComponent,ExamSummryComponent,

  ],
  templateUrl: './select-diploma.component.html',
  styleUrl: './select-diploma.component.scss'
})
export class SelectDiplomaComponent implements OnInit {


  private readonly _examId: string = '6700707030a3c3c1944a9c5d';
  readonly examName: string = 'HTML';
  private readonly _store = inject(Store);

  isOpen$!: Observable<boolean>;
  examStatus$!: Observable<exmStatus>;

  eventsChange() {
    this.isOpen$ = this._store.select(ExamSelectors.selectExamModal);
    this.examStatus$ = this._store.select(ExamSelectors.selectExamStatus);
  }

  startExam() {
    // this._store.dispatch(ExamActions.toggleModal());
    this._store.dispatch(
      QuestionActions.loadQuestions({ examId: this._examId })
    );
    // this._store.select(QuestionSelectors.selectQuestions).subscribe({
    //   next: (data) => {
    //     console.log(data);
    //   },
    // });
  }

  // Life Cycle methods
  ngOnInit(): void {
    this.eventsChange();
  }

}
