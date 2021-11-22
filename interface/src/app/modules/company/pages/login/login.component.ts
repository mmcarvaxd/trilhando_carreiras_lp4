import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Auth } from 'src/app/shared/Classes/Auth';
import { CompanyLogin } from '../../store/actions/company.actions';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'tc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  auth: Auth = new Auth()
  constructor(private store: Store, private router: Router, private notificationsService: NotificationsService) { }

  ngOnInit(): void {
  }

  async doLogin() {
  try{
    await this.store.dispatch(new CompanyLogin(this.auth)).toPromise()
    this.notificationsService.success('Boa!', 'Login efetuado com sucesso!', {
      timeOut: 3000,
      showProgressBar: false,
      pauseOnHover: true,
      clickToClose: true
    })
    this.router.navigate(['company', 'home'])
  } catch (error) {
    this.notificationsService.error('Ocorreu um erro...', 'Verifique suas credenciais!', {
      timeOut: 3000,
      showProgressBar: false,
      pauseOnHover: true,
      clickToClose: true
    })
  }
}
}

