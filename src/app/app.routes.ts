import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./home.component').then((m) => m.HomePageComponent),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./settings.component').then((m) => m.SettingPageComponent),
  },
  {
    path: '**',
    redirectTo: ''
  }
];
