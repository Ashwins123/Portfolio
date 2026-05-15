import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About) },
  { path: 'skills', loadComponent: () => import('./pages/skills/skills').then(m => m.Skills) },
  { path: 'projects', loadComponent: () => import('./pages/projects/projects').then(m => m.Projects) },
  { path: 'resume', loadComponent: () => import('./pages/resume/resume').then(m => m.Resume) },
  { path: 'experience', loadComponent: () => import('./pages/experience/experience').then(m => m.Experience) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.Contact) },
  { path: 'jobs', loadComponent: () => import('./pages/jobs/jobs').then(m => m.Jobs) },
  { path: 'jobs/:id', loadComponent: () => import('./pages/jobs/job-detail/job-detail').then(m => m.JobDetail) },
  { path: 'ai', loadComponent: () => import('./pages/ai-features/ai-features').then(m => m.AiFeatures) },
  { path: 'login', loadComponent: () => import('./pages/login/login').then(m => m.Login) },
  { path: 'signup', loadComponent: () => import('./pages/signup/signup').then(m => m.Signup) },
  { path: 'dashboard', canActivate: [authGuard], loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard) },
  { path: 'profile', canActivate: [authGuard], loadComponent: () => import('./pages/profile/profile').then(m => m.Profile) },
  { path: '**', redirectTo: '' },
];
