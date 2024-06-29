import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'category/headphones',
    loadComponent: () => import('./pages/categories/headphones/headphones.component').then(m => m.HeadphonesComponent),
  },
  {
    path: 'category/earphones',
    loadComponent: () => import('./pages/categories/earphones/earphones.component').then(m => m.EarphonesComponent),
  },
  {
    path: 'category/speakers',
    loadComponent: () => import('./pages/categories/speakers/speakers.component').then(m => m.SpeakersComponent),
  }
];
