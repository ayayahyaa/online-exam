import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NotFoundPagesComponent } from './pages/not-found-pages/not-found-pages.component';
import { authGuard } from './guards/auth.guard';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { loggedGuard } from './guards/logged.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
        title: 'login'
      },
      {
        path: 'register',
        loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent),
        title: 'register'
      },
      {
        path: 'forgot',
        loadComponent: () => import('./pages/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent),
        title: 'forgot'
      },
    ]
  },

  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        title: 'home',
      },
      {
        path: 'exams',
        loadComponent: () => import('./pages/exams/exams.component').then(m => m.ExamsComponent),
        title: 'exams'
      },
  {
    path: '**',
    component: NotFoundPagesComponent
  },
    ]
  },
];
