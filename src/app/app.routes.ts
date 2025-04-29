import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NotFoundPagesComponent } from './pages/not-found-pages/not-found-pages.component';
import { authGuard } from './guards/auth.guard';
import { loggedGuard } from './guards/logged.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    canActivate: [loggedGuard],
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
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        title: 'home',
      },
      {
        path: 'quiz-history',
        loadComponent: () => import('./pages/quiz-history/quiz-history.component').then(m => m.QuizHistoryComponent),
        title: 'quiz-history'
      },
      {
        path: 'select-diploma',
        loadComponent: () => import('./pages/select-diploma/select-diploma.component').then(m => m.SelectDiplomaComponent),
        title: 'select-diploma'
      },
  {
    path: '**',
    component: NotFoundPagesComponent
  },
    ]
  },
];

