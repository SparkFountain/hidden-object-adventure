import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'willkommen',
    loadComponent: () => import('./welcome/welcome').then((c) => c.WelcomeComponent),
  },
  { path: '', redirectTo: '/willkommen', pathMatch: 'full' },
  {
    path: 'spielanleitung',
    loadComponent: () => import('./how-to-play/how-to-play').then((m) => m.HowToPlayComponent),
  },
  {
    path: 'karte',
    loadComponent: () => import('./map/map').then((m) => m.MapComponent),
  },
  {
    path: 'kirche',
    loadComponent: () => import('./church/church').then((m) => m.ChurchComponent),
  },
  {
    path: 'wald',
    loadComponent: () => import('./forest/forest').then((m) => m.ForestComponent),
  },
  {
    path: 'siedlung',
    loadComponent: () => import('./igloo/igloo').then((m) => m.IglooComponent),
  },
  {
    path: 'zoo',
    loadComponent: () => import('./zoo/zoo').then((m) => m.ZooComponent),
  },
  {
    path: 'eislaufen',
    loadComponent: () => import('./ice-skating/ice-skating').then((m) => m.IceSkatingComponent),
  },
  {
    path: 'seilbahn',
    loadComponent: () => import('./cableway/cableway').then((m) => m.CablewayComponent),
  },
  {
    path: 'theater',
    loadComponent: () => import('./theater/theater').then((m) => m.TheaterComponent),
  },
  {
    path: 'bar',
    loadComponent: () => import('./bar/bar').then((m) => m.Bar),
  },
  {
    path: 'schwimmbad',
    loadComponent: () => import('./pool/pool').then((m) => m.PoolComponent),
  },
  {
    path: 'hotel',
    loadComponent: () => import('./hotel/hotel').then((m) => m.HotelComponent),
  },
  { path: '**', redirectTo: '/willkommen', pathMatch: 'full' },
];
