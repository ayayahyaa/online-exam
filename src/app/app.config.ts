import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { headersInterceptor } from './core/interceptors/headers/headers.interceptor';
import { provideStore } from '@ngrx/store';
import { examReducer } from './store/exam/exam.reducer';
import { questionReducer } from './store/question/question.reducer';
import { QuestionsEffects } from './store/question/question.effects';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch() , withInterceptors([headersInterceptor])),
    provideStore({
      exam: examReducer,
      question: questionReducer,
    }),
    provideEffects( QuestionsEffects),
  ],
};
