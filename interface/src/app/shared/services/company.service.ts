import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Company } from '../Classes/Company';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  url: string = `${environment.apiUrl}/companies`
  constructor(private http: HttpClient) { }

  saveCompany(company: Company): Promise<Company> {
    return this.http.post<Company>(this.url, company).toPromise()
  }

  getCompanies(): Promise<Company[]> {
    return this.http.get<Company[]>(this.url).toPromise()
  }

  getCompany(_id:string): Promise<Company>{
    return this.http.get<Company>(this.url+`/${_id}`).toPromise()
  }
  
  updateCompany(company: Company): Promise<Company> {
    return this.http.put<Company>(this.url, company).toPromise()
  }
}
