import { JobService } from './../../../../shared/services/job.service';
import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/shared/Classes/Job';

@Component({
  selector: 'tc-list-job',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.scss']
})
export class ListJobComponent implements OnInit {
  jobs:Job[] = []
  constructor(private jobService: JobService) { }

  async ngOnInit(): Promise<void> {
    this.jobs = await this.jobService.getJobs()
    this.jobs = this.jobs.map(j => ({...j, ...{company: j.companyId}}))
  }
}
