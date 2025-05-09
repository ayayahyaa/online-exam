import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
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
import { ActivatedRoute, Router } from '@angular/router';
import { ExamsService } from '../../core/services/exams.service';
import { Exam } from '../../core/interfaces-exam/exam-interfaces';
import { SubjectService } from '../../core/services/subject.service';




@Component({
  selector: 'app-select-diploma',
  imports: [CustomModalComponent ,AsyncPipe,ExamComponent,ExamScoreComponent,ExamSummryComponent,],
  templateUrl: './select-diploma.component.html',
  styleUrl: './select-diploma.component.scss'
})
export class SelectDiplomaComponent implements OnInit {
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _examService = inject(ExamsService);
  private readonly _subjectService = inject(SubjectService);


  exams: WritableSignal<Exam[]> = signal([]);




  private   _examId: string = '6700707030a3c3c1944a9c5d';
    examName: string = 'HTML';
  private readonly _store = inject(Store);

  isOpen$!: Observable<boolean>;
  examStatus$!: Observable<exmStatus>;

  eventsChange() {
    this.isOpen$ = this._store.select(ExamSelectors.selectExamModal);
    this.examStatus$ = this._store.select(ExamSelectors.selectExamStatus);
  }

  startExam(examId: string) {
    this._store.dispatch(
      QuestionActions.loadQuestions({ examId: this._examId })
    );
    console.log('Start exam:', examId);

  }


  ngOnInit(): void {
    const subjectId = this._activatedRoute.snapshot.paramMap.get('id') ?? '';
    if (subjectId) {
          console.log('subjectId', subjectId)

      this._subjectService.getExamBySubjectId(subjectId).subscribe({
        next: (res) => {
          console.log('exam' , res)
          this.exams.set(res.exams);
        },
        error: (err) => {
          console.error('Error loading exams', err);
        },
      });
    }
  }




}





