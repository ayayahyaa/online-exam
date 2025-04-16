import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApiService } from '../../../../projects/auth-api/src/public-api';
import { SocialIconsComponent } from "../social-icons/social-icons.component";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-forgot-password',
  imports: [ReactiveFormsModule, RouterLink, SocialIconsComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  constructor( private _authApiService: AuthApiService , private _router: Router){}
  private forgotSubscription?: Subscription;


  isLoading : boolean = false ;
    msgError :string = ""
    isSuccess :string = ""

    isPasswordVisible = false;
    togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
    }



  step: number = 1;
  verifyEmail: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  verifyCode: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{6}$/)]),
  });


  resetPassword: FormGroup = new FormGroup({
    newPassword: new FormControl (null , [Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*\d)(?=.*[#?!@$%^&*-]).{8,}$/)
  ]),
  confirmPassword: new FormControl (null , [Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*\d)(?=.*[#?!@$%^&*-]).{8,}$/)
  ]),
});



  verifyEmailSubmit(): void {
    let emailValue = this.verifyEmail.get('email')?.value
    this.resetPassword.get('email')?.patchValue(emailValue)
    this.forgotSubscription=  this._authApiService.forgotPassword(this.verifyEmail.value).subscribe({
      next: (res) => {
        console.log(res)
        if (res.message === 'success') {
          this.step = 2;
        }
      },
      error: (err) => {
        console.log(err)
      }
    })}
    ngOnDestroy(): void {
      this.forgotSubscription?.unsubscribe();

  }



  verifyCodeSubmit(): void {
    this._authApiService.verifyCode(this.verifyCode.value).subscribe({
      next: (res) => {
        console.log(res)
        if (res.status === 'Success') {
          this.step = 3;
          console.log(this.step)
        }
      },
      error: (err) => {
        console.log(err)
      }
    }
    )
  }


  resetPasswordSubmit(): void {
    this._authApiService.resetPassword(this.resetPassword.value).subscribe({
      next: (res) => {
        console.log(res)
        this._router.navigate(['/auth'])
      },
      error: (err) => {
        console.log(err)
      }
    })
  }


  resendCode():void{
    let emailValue = this.verifyEmail.get('email')?.value
    this.resetPassword.get('email')?.patchValue(emailValue)
    this._authApiService.resendCode(this.verifyEmail.value).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
  }

