import { AuthenticateService } from 'src/app/shared/services/authenticate.service';
import { CompanyLogin, CompanyLogout } from './../actions/company.actions';
import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Auth } from 'src/app/shared/Classes/Auth';
import { AuthStateModel } from '../models/auth.state.module';

@State<AuthStateModel>({
  name: 'company',
  defaults: {
    _id: null,
    name: null,
    token: null
  }
})
@Injectable()
export class CompanyState {
  constructor(private authenticateService: AuthenticateService) {}

  @Selector()
  static _id(state: AuthStateModel): string | null {
    return state._id;
  }

  @Selector()
  static companyName(state: AuthStateModel): string | null {
    return state.name;
  }

  @Selector()
  static token(state: AuthStateModel): string | null {
    return state.token;
  }

  @Selector()
  static isAuthenticated(state: AuthStateModel): boolean {
    return !!state.token;
  }

  @Action(CompanyLogin)
  async doLogin(ctx: StateContext<AuthStateModel>, {payload}: {payload: Auth}) {
    console.log(payload)
    let company = await this.authenticateService.authCompany(payload)
    ctx.patchState({
      _id: company._id,
      name: company.name,
      token: company.token
    })
  }

  @Action(CompanyLogout)
  doLogout(ctx: StateContext<AuthStateModel>) {
    ctx.setState({
      _id: null,
      name: null,
      token: null
    })
  }
}
