import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { NotificationsService } from 'angular2-notifications';
import { User } from 'src/app/shared/Classes/User';
import { UserService } from 'src/app/shared/services/user.service';
import { UserState } from '../../store/states/user.state';

@Component({
  selector: 'tc-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user = new User()

  constructor(private userService: UserService, private notificationsService: NotificationsService, private router: Router, private store: Store) { }

  async ngOnInit(): Promise<void> {
    let id = this.store.selectSnapshot(UserState._id) || ""
    this.user = await this.userService.getUser(id)
  }

  async UpdateUser() {
  try{
    await this.userService.updateUser(this.user)
    this.notificationsService.success('Boa!', 'Seus dados foram alterados com sucesso!', {
      timeOut: 3000,
      showProgressBar: false,
      pauseOnHover: true,
      clickToClose: true
    })
    this.router.navigate(['user', 'home'])
  } catch (error) {
    this.notificationsService.error('Ocorreu um erro...', 'Não foi possível alterar seus dados!', {
      timeOut: 3000,
      showProgressBar: false,
      pauseOnHover: true,
      clickToClose: true
    })
  }
  }
}
