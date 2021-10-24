import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/shared/Classes/Company';
import { CompanyService } from 'src/app/shared/services/company.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  company: Company = new Company()
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
  }

  async saveCompany(): Promise<void> {
    await this.companyService.saveCompany(this.company)
  }
}
