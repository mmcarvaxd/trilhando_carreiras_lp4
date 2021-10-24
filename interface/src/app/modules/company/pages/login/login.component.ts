import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/shared/Classes/Auth';
import { AuthenticateService } from 'src/app/shared/services/authenticate.service';

@Component({
  selector: 'tc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  auth: Auth = new Auth()
  constructor(private authService: AuthenticateService) { }

  ngOnInit(): void {
  }

  async doLogin() {
    let resp = await this.authService.authCompany(this.auth)
    console.log(resp)
  }
}
