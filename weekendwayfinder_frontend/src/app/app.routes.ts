import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'signin'
  },
  {
    path: 'signin',
    loadComponent: () =>
      import('./pages/sign-in/sign-in.component').then(m => m.SignInComponent)
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'planner',
    loadComponent: () =>
      import('./pages/trip-planner/trip-planner.component').then(m => m.TripPlannerComponent)
  },
  {
    path: 'suggestions',
    loadComponent: () =>
      import('./pages/ai-suggestions/ai-suggestions.component').then(m => m.AiSuggestionsComponent)
  },
  // fallback route
  {
    path: '**',
    redirectTo: 'signin'
  }
];
