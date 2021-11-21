import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { NotificationsService } from 'angular2-notifications';
import { Company } from 'src/app/shared/Classes/Company';
import { CompanyService } from 'src/app/shared/services/company.service';
import { CompanyState } from '../../store/states/company.state';

@Component({
  selector: 'tc-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  company = new Company()

  constructor(private companyService: CompanyService, private notificationsService: NotificationsService, private router: Router, private store: Store) { }

  async ngOnInit(): Promise<void> {
    let id = this.store.selectSnapshot(CompanyState._id) || ""
    this.company = await this.companyService.getCompany(id)
  }

}
