import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  url: string = `${environment.apiUrl}/charts`

  constructor(private http: HttpClient) { }

  getChartsDesc(): Promise<[]> {
    return this.http.get<[]>(this.url + '/desc').toPromise()
  }

  getChartsAsc(): Promise<[]> {
    return this.http.get<[]>(this.url + '/asc').toPromise()
  }
}
