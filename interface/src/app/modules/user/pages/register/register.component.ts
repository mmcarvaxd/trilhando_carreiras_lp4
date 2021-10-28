import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { User } from 'src/app/shared/Classes/User';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'user-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User = new User()
  constructor(private userService: UserService, private notificationsService: NotificationsService, private router: Router) { }

  ngOnInit(): void {
  }

  async saveUser(): Promise<void> {
    try {
      await this.userService.saveUser(this.user)
      this.notificationsService.success('Boa!', 'Seu usuário foi cadastrado, use o e-mail e a senha para entrar!', {
        timeOut: 3000,
        showProgressBar: false,
        pauseOnHover: true,
        clickToClose: true
      })
      this.router.navigate(['user', 'signin'])
    } catch (error) {
      this.notificationsService.error('Ocorreu um erro...', 'Não foi possivel criar seu usuário!', {
        timeOut: 3000,
        showProgressBar: false,
        pauseOnHover: true,
        clickToClose: true
      })
    }
  }
}