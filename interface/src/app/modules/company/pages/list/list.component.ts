import { CompanyService } from './../../../../shared/services/company.service';
import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/shared/Classes/Company';

@Component({
  selector: 'tc-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  isLoading: boolean = true
  companies: Company[] = []
  constructor(private companyService: CompanyService) { }

  async ngOnInit(): Promise<void> {
    this.getCompanies()
  }

  async getCompanies() {
    try {
      this.isLoading = true
      this.companies = await this.companyService.getCompanies()
    } finally {
      this.isLoading = false
    }
  }
}
