import { Job } from './../../../../shared/Classes/Job';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tc-register-job',
  templateUrl: './register-job.component.html',
  styleUrls: ['./register-job.component.scss']
})
export class RegisterJobComponent implements OnInit {
  job: Job = new Job()
  constructor() { }

  ngOnInit(): void {
  }

  saveJob() {
    console.log(this.job)
  }
}
