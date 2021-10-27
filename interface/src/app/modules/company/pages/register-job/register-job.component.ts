import { JobService } from './../../../../shared/services/job.service';
import { Job } from './../../../../shared/Classes/Job';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tc-register-job',
  templateUrl: './register-job.component.html',
  styleUrls: ['./register-job.component.scss']
})
export class RegisterJobComponent implements OnInit {
  job: Job = new Job()
  requirements: string = ""
  constructor(private jobService: JobService) { }

  ngOnInit(): void {
  }

  async saveJob() {
    this.job.requirements = this.requirements.split(",")
    await this.jobService.saveJob(this.job)
  }
}
