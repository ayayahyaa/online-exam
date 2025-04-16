import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Router } from 'express';
import { AuthApiService } from '../../../../projects/auth-api/src/public-api';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private authApiService = inject(AuthApiService);
  private router = inject(Router);
  private loginSubscription?: Subscription;

  isLoading : boolean = false ;
  msgError :string = ""
  isSuccess :string = ""



  logout():void{
  this.authApiService.logout()
      }
}
