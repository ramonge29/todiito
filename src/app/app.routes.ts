import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadComponent: () =>
            import('./home-page.component').then((m) => m.HomePageComponent),
    },
    {
        path: '',
        loadComponent: () =>
            import('./setting-page.component').then((m) => m.SettingPageComponent),
    },
    {
        path: '**',
        redirectTo: ''
    }
];
