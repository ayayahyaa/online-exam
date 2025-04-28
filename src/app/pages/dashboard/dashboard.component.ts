import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { inject } from '@angular/core';
import { AuthApiService } from '../../../../projects/auth-api/src/public-api';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet , RouterLink ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  private authApiService = inject(AuthApiService);
  private router = inject(Router);
  private logoutSubscription?: Subscription;


  isLoading : boolean = false ;
  msgError :string = ""
  isSuccess :string = ""
  userData:any;


  logout(){
      this.logoutSubscription= this.authApiService.logout().subscribe({
        next: (res) => {
          console.log(res);
          if(res.message === 'success'){
            setTimeout(() => {
              localStorage.removeItem('token');
              this.userData = null;
              this.router.navigate(['/auth']);
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
    ngOnDestroy(): void {
      this.logoutSubscription?.unsubscribe();



}

}
