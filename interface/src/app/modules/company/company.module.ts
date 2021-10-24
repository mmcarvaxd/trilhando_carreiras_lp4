import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { RegisterComponent } from './pages/register/register.component';
import { ArchwizardModule } from 'angular-archwizard';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RegisterComponent
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
