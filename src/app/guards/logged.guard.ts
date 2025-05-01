import { CanActivateFn } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';


export const loggedGuard: CanActivateFn = (route, state) => {
  const router = inject (Router)
  const id = inject (PLATFORM_ID)

    if(isPlatformBrowser(id) ){
      if( localStorage.getItem('token') === null){
        return true;
      }

      else{
        router.navigate(['/dashboard/home'])
        return false;
      }

    }
    else{
      return false ;
    }};





