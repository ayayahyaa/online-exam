import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthApiService } from '../../../../projects/auth-api/src/public-api';
import { SocialIconsComponent } from "../social-icons/social-icons.component";
import { MsgPatternComponent } from "../msg-pattern/msg-pattern.component";
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, SocialIconsComponent, MsgPatternComponent , RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor( private _authApiService: AuthApiService ,   private  _formBuilder: FormBuilder, private _router: Router){}
  private registerSubscription?: Subscription;


  isLoading : boolean = false ;
  msgError :string = ""
  isSuccess :string = ""

  isPasswordVisible = false;
  togglePasswordVisibility(): void {
  this.isPasswordVisible = !this.isPasswordVisible;
  }




  registerForm: FormGroup = new FormGroup ({
    username: new FormControl (null , [Validators.required , Validators.minLength(3) , Validators.maxLength(20) ] ),
    firstName: new FormControl (null , [Validators.required , Validators.minLength(3) , Validators.maxLength(20) ] ),
    lastName: new FormControl (null , [Validators.required , Validators.minLength(3) , Validators.maxLength(20) ] ),
    email: new FormControl (null , [Validators.required , Validators.email ]),
    password: new FormControl (null , [Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*\d)(?=.*[#?!@$%^&*-]).{8,}$/)]),
    rePassword: new FormControl (null , [Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*\d)(?=.*[#?!@$%^&*-]).{8,}$/)]),
    phone: new FormControl (null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
  },{
    validators: [this.confirmPassword]
  }
)



  submitRegister(){
    console.log(this.registerForm)
    if(this.registerForm.valid){
      this.isLoading = true;
      this.registerSubscription= this._authApiService.register(this.registerForm.value).subscribe({
        next: (res) => {
          console.log(res);
          if(res.message === 'success'){
            setTimeout(() => {

              localStorage.setItem('token', res.token)

              this._router.navigate(['/auth']);
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
    }else{
      this.registerForm.markAllAsTouched();
    }
    }    ngOnDestroy(): void {
      this.registerSubscription?.unsubscribe();
  }


  confirmPassword (groub : AbstractControl){
    const password = groub.get('password')?.value;
    const rePassword = groub.get('rePassword')?.value;
    return password === rePassword ? null : {mismatch:true}
  }

}
