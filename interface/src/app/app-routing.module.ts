import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'company',
  loadChildren: () => import('./modules/company/company.module').then(mod => mod.CompanyModule)
},
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
