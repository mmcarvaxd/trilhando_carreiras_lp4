import { Job } from './../Classes/Job';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  url: string = `${environment.apiUrl}/jobs`
  constructor(private http: HttpClient) { }

  saveJob(job: Job): Promise<Job> {
    return this.http.post<Job>(this.url, job).toPromise()
  }

  getJobs(): Promise<Job[]> {
    return this.http.get<Job[]>(this.url).toPromise()
  }
}
