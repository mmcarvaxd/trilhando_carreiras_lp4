import { RegisterJobComponent } from './pages/register-job/register-job.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  }, {
    path: 'signup',
    component: RegisterComponent
  },  {
    path: 'signin',
    component: LoginComponent
  },  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'job',
    component: RegisterJobComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
