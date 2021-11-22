import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { NotificationsService } from 'angular2-notifications';
import { Auth } from 'src/app/shared/Classes/Auth';
import { UserLogin } from '../../store/actions/user.actions';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  auth: Auth = new Auth()
  constructor(private store: Store,private notificationsService: NotificationsService, private router: Router) { }

  ngOnInit(): void {
  }

  async doLogin() {
  try{
    await this.store.dispatch(new UserLogin(this.auth)).toPromise()
    this.notificationsService.success('Boa!', 'Login efetuado com sucesso!', {
      timeOut: 3000,
      showProgressBar: false,
      pauseOnHover: true,
      clickToClose: true
    })
    this.router.navigate(['user', 'home'])
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