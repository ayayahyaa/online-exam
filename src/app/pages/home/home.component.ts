import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { SubjectService } from '../../core/services/subject.service';
import { Subject } from '../../core/interfaces-subject/subject-interfaces';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit  {
  private readonly _router = inject(Router);

  private readonly _subjectService = inject(SubjectService);
  subjects:WritableSignal<Subject[]> = signal([])

  allShown = false;

ngOnInit(): void {
  this.getSubject()
}

  getSubject():void{
    this._subjectService.getAllSubject().subscribe({
      next:(res)=>{
        console.log(res);
        this.subjects.set(res.slice(0,4));
    },
    error: (err) => {
      console.error('Error', err);
    }
    })
  }

  getAllSubject():void{
    this._subjectService.getAllSubject().subscribe({
      next:(res)=>{
        console.log(res);
        this.subjects.set(res);
        this.allShown = true;
    },
    error: (err) => {
      console.error('Error', err);
    }
    })
  }

  goToExam(subjectId:string):void{
    this._router.navigate(['/dashboard/select-diploma', subjectId])
  }
}


