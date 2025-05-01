import { Component, inject, OnInit } from '@angular/core';
import { CustomModalComponent } from '../../shared/ui/custom-modal/custom-modal.component';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { ExamComponent } from '../../shared/business/exam/exam/exam.component';
import { ExamScoreComponent } from '../../shared/business/exam-score/exam-score/exam-score.component';
import { ExamSummryComponent } from '../../shared/business/exam-summry/exam-summry/exam-summry.component';
import { Observable } from 'rxjs';
import { exmStatus } from '../../store/exam/exam.state';
import * as ExamSelectors from '../../../app/store/exam/exam.selector';
import * as QuestionActions from '../../../app/store/question/question.action';



@Component({
  selector: 'app-select-diploma',
  imports: [CustomModalComponent ,AsyncPipe,ExamComponent,ExamScoreComponent,ExamSummryComponent,],
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
    this._store.dispatch(
      QuestionActions.loadQuestions({ examId: this._examId })
    );
  }

  ngOnInit(): void {
    this.eventsChange();
  }

}
