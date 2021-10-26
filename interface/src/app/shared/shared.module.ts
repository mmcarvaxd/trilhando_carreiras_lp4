import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { TitleComponent } from './components/title/title.component';
import { FormsModule } from '@angular/forms';
import { SubTitleComponent } from './components/sub-title/sub-title.component';
import { ButtonComponent } from './components/button/button.component';
import { CompanyService } from './services/company.service';
import { HttpClientModule } from "@angular/common/http";
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    InputComponent,
    TitleComponent,
    SubTitleComponent,
    ButtonComponent,
    FooterComponent
  ],
  providers: [
    CompanyService
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    InputComponent,
    TitleComponent,
    SubTitleComponent,
    ButtonComponent,
    FooterComponent
  ]
})
export class SharedModule { }
