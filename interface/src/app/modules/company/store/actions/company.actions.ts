import { Auth } from "src/app/shared/Classes/Auth";

export class CompanyLogin {
  static readonly type = '[Company] Login';
  constructor(public payload: Auth) {}
}

export class CompanyLogout {
  static readonly type = '[Company] Logout';
  constructor() {}
}

