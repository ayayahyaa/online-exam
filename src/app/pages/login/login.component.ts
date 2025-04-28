import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthApiService } from '../../../../projects/auth-api/src/public-api';
import { SocialIconsComponent } from "../social-icons/social-icons.component";
import { MsgPatternComponent } from "../msg-pattern/msg-pattern.component";
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink, SocialIconsComponent, MsgPatternComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
    constructor(private _authApiService: AuthApiService , private _router:Router){}
    private loginSubscription?: Subscription;


    isLoading : boolean = false ;
    msgError :string = ""
    isSuccess :string = ""

    isPasswordVisible = false;
    togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
    }



  loginForm : FormGroup = new FormGroup ({
    email : new FormControl (null,[Validators.email]),
    password: new FormControl (null , [Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*\d)(?=.*[#?!@$%^&*-]).{8,}$/
)]),  },
  );

  submitLogin(){
    console.log(this.loginForm)
    if (this.loginForm.valid){
      this.isLoading = true;

    console.log(this.loginForm.value);
    this.loginSubscription = this._authApiService.login(this.loginForm.value).subscribe({
      next: (res) => {
        console.log(res);
        if( res.message === 'success'){
          setTimeout(() => {

            localStorage.setItem('token', res.token)
            this._authApiService.getUserData()

          this._router.navigate(['/dashboard/home']);
          }, 1000);
          this.isSuccess = res.message
        }
        this.isLoading = false;
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
        this.msgError = err.error.message
        this.isLoading = false;
      },
    })
      }
    }
    ngOnDestroy(): void {
      this.loginSubscription?.unsubscribe();
  }
}


