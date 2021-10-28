import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { User } from '../Classes/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = `${environment.apiUrl}/users`
  constructor(private http: HttpClient) { }

  saveUser(user: User): Promise<User> {
    return this.http.post<User>(this.url, user).toPromise()
  }

  getUsers(): Promise<User[]> {
    return this.http.get<User[]>(this.url).toPromise()
  }
}
