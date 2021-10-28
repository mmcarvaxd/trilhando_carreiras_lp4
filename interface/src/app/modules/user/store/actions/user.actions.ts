import { Auth } from "src/app/shared/Classes/Auth";

export class UserLogin {
  static readonly type = '[User] Login';
  constructor(public payload: Auth) {}
}

export class UserLogout {
  static readonly type = '[User] Logout';
  constructor() {}
}

