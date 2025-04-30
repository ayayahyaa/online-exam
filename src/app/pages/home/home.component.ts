import { IGetAllSubjectData } from './../../../../projects/auth-api/src/lib/interface/interfaces-subjects/iget-all-subject-data.ts';
import { Router } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { SubjectApiService } from '../../../../projects/auth-api/src/lib/subject-api.service';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit  {
  private readonly router = inject(Router)
  private readonly subjectApiService = inject(SubjectApiService)
  subject: IGetAllSubjectData  = {} as IGetAllSubjectData;




  ngOnInit(): void {
    this.getAllSubject();
  }



getAllSubject(){
    this.subjectApiService.getAllSubjects(10).subscribe({
      next:(res)=>{
        console.log(res)
        this.subject = res;
      },
    })
  }

}
