import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArchwizardModule } from 'angular-archwizard';
import { FormsModule } from '@angular/forms';
import { ActionCardComponent } from './pages/home/components/action-card/action-card.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ListJobComponent } from './pages/list-job/list-job.component';
import { JobComponent } from './pages/job/job.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ActionCardComponent,
    ProfileComponent,
    ListJobComponent,
    JobComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    ArchwizardModule,
    FormsModule,
  ]
})
export class UserModule { }
