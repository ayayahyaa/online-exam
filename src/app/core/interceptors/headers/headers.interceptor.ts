import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';


export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  const pLATFORM_ID = inject(PLATFORM_ID);
  const router = inject(Router);

  if (localStorage.getItem('token')) {
    req = req.clone({
      setHeaders: {
        token: localStorage.getItem('token')!,
      },
    });
  }

  if (isPlatformBrowser(pLATFORM_ID)) {
    const token = localStorage.getItem('token')!;
    if (token) {
      localStorage.setItem('userId', (jwtDecode(token) as { id: string }).id);
      return next(req);
    } else {
      return next(req);
    }
  }

  return next(req);
};
