import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Auth } from 'src/app/shared/Classes/Auth';
import { AuthenticateService } from 'src/app/shared/services/authenticate.service';
import { CompanyLogin } from '../../store/actions/company.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'tc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  auth: Auth = new Auth()
  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
  }

  async doLogin() {
    await this.store.dispatch(new CompanyLogin(this.auth)).toPromise()
    this.router.navigate(['company', 'home'])
  }
}
