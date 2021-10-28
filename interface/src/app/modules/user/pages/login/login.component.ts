import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Auth } from 'src/app/shared/Classes/Auth';
import { UserLogin } from '../../store/actions/user.actions';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  auth: Auth = new Auth()
  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
  }

  async doLogin() {
    await this.store.dispatch(new UserLogin(this.auth)).toPromise()
    this.router.navigate(['user', 'home'])
  }
}
