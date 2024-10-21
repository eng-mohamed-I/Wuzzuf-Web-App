import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { JobsComponent } from './pages/jobs/jobs.component';

export const routes: Routes = [
  { path: '', redirectTo: 'jobs/egypt', pathMatch: 'full' },
  { path: 'jobs/egypt', component: JobsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent },
];
