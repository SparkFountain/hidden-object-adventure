import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'willkommen',
    loadComponent: () => import('./welcome/welcome').then((c) => c.Welcome),
  },
  { path: '', redirectTo: '/willkommen', pathMatch: 'full' },
  {
    path: 'spielanleitung',
    loadComponent: () => import('./how-to-play/how-to-play').then((m) => m.HowToPlay),
  },
  {
    path: 'karte',
    loadComponent: () => import('./map/map').then((m) => m.Map),
  },
  {
    path: 'kirche',
    loadComponent: () => import('./church/church').then((m) => m.Church),
  },
  {
    path: 'wald',
    loadComponent: () => import('./forest/forest').then((m) => m.Forest),
  },
  {
    path: 'siedlung',
    loadComponent: () => import('./igloo/igloo').then((m) => m.Igloo),
  },
  {
    path: 'zoo',
    loadComponent: () => import('./zoo/zoo').then((m) => m.Zoo),
  },
  {
    path: 'eislaufen',
    loadComponent: () => import('./ice-skating/ice-skating').then((m) => m.IceSkating),
  },
  {
    path: 'seilbahn',
    loadComponent: () => import('./cableway/cableway').then((m) => m.Cableway),
  },
  {
    path: 'theater',
    loadComponent: () => import('./theater/theater').then((m) => m.Theater),
  },
  {
    path: 'bar',
    loadComponent: () => import('./bar/bar').then((m) => m.Bar),
  },
  {
    path: 'schwimmbad',
    loadComponent: () => import('./pool/pool').then((m) => m.Pool),
  },
  {
    path: 'hotel',
    loadComponent: () => import('./hotel/hotel').then((m) => m.Hotel),
  },
  { path: '**', redirectTo: '/willkommen', pathMatch: 'full' },
];
