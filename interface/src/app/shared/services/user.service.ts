import { UserState } from './../../modules/user/store/states/user.state'
import { Store } from '@ngxs/store'
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from "@angular/common/http"

import { environment } from 'src/environments/environment'
import { User } from '../Classes/User'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = `${environment.apiUrl}/users`
  constructor(private http: HttpClient, private store: Store) { }

  createAuthorizationHeader(headers: HttpHeaders) {
    let token = this.store.selectSnapshot(UserState.token) || ""
    headers.set('token', token)

    return headers.set('token', token)
  }

  saveUser(user: User): Promise<User> {
    return this.http.post<User>(this.url, user).toPromise()
  }

  getUsers(): Promise<User[]> {
    return this.http.get<User[]>(this.url).toPromise()
  }

  jobApply(job_id: string): Promise<any> {
    let headers = new HttpHeaders()
    headers = this.createAuthorizationHeader(headers)

    return this.http.post<any>(this.url + `/job/${job_id}`, {},  {
      headers
    }).toPromise()
  }

  revokeJob(job_id: string): Promise<any> {
    let headers = new HttpHeaders()
    headers = this.createAuthorizationHeader(headers)

    return this.http.delete<any>(this.url + `/job/${job_id}`,  {
      headers
    }).toPromise()
  }
}
