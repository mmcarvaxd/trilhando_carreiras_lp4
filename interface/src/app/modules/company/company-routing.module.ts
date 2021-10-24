import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [ {
  path: '',
  component: ListComponent
},{
  path: 'register',
  component: RegisterComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
