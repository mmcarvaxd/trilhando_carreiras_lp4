import { Router } from '@angular/router';
import { CompanyLogout } from './../../store/actions/company.actions';
import { Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'tc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store, private router: Router, private _service: NotificationsService) { }

  ngOnInit(): void {
  }

  async logout() {
    await this.store.dispatch(new CompanyLogout()).toPromise()
    this.router.navigate(['company', 'signin'])
  }

  testNotification() {
    this._service.success('Item created!', 'Click to undo...', {
      timeOut: 3000,
      showProgressBar: false,
      pauseOnHover: true,
      clickToClose: true
    });
  }
}
