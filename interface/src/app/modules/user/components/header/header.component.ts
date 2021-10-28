import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { NotificationsService } from 'angular2-notifications';
import { UserLogout } from '../../store/actions/user.actions';

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
    await this.store.dispatch(new UserLogout()).toPromise()
    this.router.navigate(['user', 'signin'])
  }

}
