import { NotAuthGuard } from './guards/notauth.guard';
import { AuthGuard } from './guards/auth.guard';
import { ListJobComponent } from './pages/list-job/list-job.component';
import { RegisterJobComponent } from './pages/register-job/register-job.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';

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
  }, {
    path: 'job',
    component: RegisterJobComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'job/list',
    component: ListJobComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
