import { AuthenticateService } from 'src/app/shared/services/authenticate.service';
import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Auth } from 'src/app/shared/Classes/Auth';
import { UserLogin, UserLogout } from '../actions/user.actions';
import { AuthStateModel } from '../models/auth.state.module';

@State<AuthStateModel>({
  name: 'user',
  defaults: {
    _id: null,
    name: null,
    token: null
  }
})
@Injectable()
export class UserState {
  constructor(private authenticateService: AuthenticateService) {}

  @Selector()
  static _id(state: AuthStateModel): string | null {
    return state._id;
  }

  @Selector()
  static userName(state: AuthStateModel): string | null {
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

  @Action(UserLogin)
  async doLogin(ctx: StateContext<AuthStateModel>, {payload}: {payload: Auth}) {
    console.log(payload)
    let user = await this.authenticateService.authUser(payload)
    ctx.patchState({
      _id: user._id,
      name: user.name,
      token: user.token
    })
  }

  @Action(UserLogout)
  doLogout(ctx: StateContext<AuthStateModel>) {
    ctx.setState({
      _id: null,
      name: null,
      token: null
    })
  }
}
