import { ChartsComponent } from './pages/charts/charts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notauth.guard';
import { HomeComponent } from './pages/home/home.component';
import { JobComponent } from './pages/job/job.component';
import { ListJobComponent } from './pages/list-job/list-job.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin'
  }, {
    path: 'signup',
    component: RegisterComponent,
    canActivate: [NotAuthGuard]
  },  {
    path: 'signin',
    component: LoginComponent,
    canActivate: [NotAuthGuard]
  },  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'jobs/list',
    component: ListJobComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'job/:id',
    component: JobComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'charts',
    component: ChartsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
