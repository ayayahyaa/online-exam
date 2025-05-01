import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { SubjectService } from '../../core/services/subject.service';
import { Subject } from '../../core/interfaces-subject/subject-interfaces';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  {
  private readonly _subjectService = inject(SubjectService);
  subjects:WritableSignal<Subject[]> = signal([])


  getSubject():void{
    this._subjectService.getAllSubject().subscribe({
      next:(res)=>{
        console.log(res);
    },
    })
  }
}
