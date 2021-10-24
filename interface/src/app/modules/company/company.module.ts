import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { RegisterComponent } from './pages/register/register.component';
import { ArchwizardModule } from 'angular-archwizard';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListComponent } from './pages/list/list.component';
import { CardComponent } from './pages/list/components/card/card.component';
import { SearchComponent } from './pages/list/components/search/search.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    RegisterComponent,
    ListComponent,
    CardComponent,
    SearchComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ArchwizardModule,
    FormsModule,
    SharedModule
  ]
})
export class CompanyModule { }
