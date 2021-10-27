import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/shared/Classes/Company';
import { CompanyService } from 'src/app/shared/services/company.service';

@Component({
  selector: 'tc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  company: Company = new Company()
  constructor(private companyService: CompanyService, private notificationsService: NotificationsService, private router: Router) { }

  ngOnInit(): void {
  }

  async saveCompany(): Promise<void> {
    try {
      await this.companyService.saveCompany(this.company)
      this.notificationsService.success('Boa!', 'Sua empresa foi cadastrada, use o e-mail e a senha para entrar!', {
        timeOut: 3000,
        showProgressBar: false,
        pauseOnHover: true,
        clickToClose: true
      })
      this.router.navigate(['company', 'signin'])
    } catch (error) {
      this.notificationsService.error('Ocorreu um erro...', 'Não foi possivel criar sua empresa!', {
        timeOut: 3000,
        showProgressBar: false,
        pauseOnHover: true,
        clickToClose: true
      })
    }
  }
}
