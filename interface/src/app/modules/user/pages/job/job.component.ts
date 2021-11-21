import { UserService } from 'src/app/shared/services/user.service';
import { UserState } from './../../store/states/user.state';
import { Store } from '@ngxs/store';
import { ActivatedRoute } from '@angular/router';
import { Job } from './../../../../shared/Classes/Job';
import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/shared/services/job.service';

@Component({
  selector: 'tc-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  job: Job = new Job()
  isAlreadyApplied: boolean = false
  id = "empty"

  constructor(private jobService: JobService, private aRouter: ActivatedRoute, private store: Store, private userService: UserService) { }

  async ngOnInit(): Promise<void> {
    await this.getJob()
  }

  async jobApply() {
    await this.userService.jobApply(this.job._id || "")
    await this.getJob()
  }

  async revokeApply() {
    await this.userService.revokeJob(this.job._id || "")
    await this.getJob()
  }

  async getJob() {
    let id: string = this.aRouter.snapshot.params['id']

    this.job = await this.jobService.getJob(id)
    this.id = this.store.selectSnapshot(UserState._id) || ""

    this.isAlreadyApplied = (this.job.candidatesId.filter(c  => this.id === c._id)[0] !== undefined)
  }
}
