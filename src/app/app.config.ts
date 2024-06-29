import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';

/* This code snippet is exporting a constant named `appConfig` of type `ApplicationConfig`. It is
setting the `providers` property of `appConfig` to an array containing two providers:
`provideZoneChangeDetection({ eventCoalescing: true })` and `provideRouter(routes)`. These providers
are used for configuring the application in an Angular environment. The `provideZoneChangeDetection`
provider is used to enable zone.js change detection with event coalescing, and the `provideRouter`
provider is used for setting up routing in the application using the routes defined in
`app.routes.ts`. */
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withComponentInputBinding(), withRouterConfig({
    paramsInheritanceStrategy: 'always'
  }))]
};
