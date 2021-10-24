import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Auth } from '../Classes/Auth';
import { Company } from '../Classes/Company';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  url: string = `${environment.apiUrl}/authenticate`

  constructor(private http: HttpClient) { }

  authCompany(auth: Auth): Promise<Company> {
    let url = this.url + '/company'
    return this.http.post<Company>(url, auth).toPromise()
  }
}
