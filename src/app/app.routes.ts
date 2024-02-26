import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./home.component').then((m) => m.HomePageComponent),
  },
  {
    path: 'balance',
    loadComponent: () =>
      import('./balance.component').then((m) => m.BalancePageComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
