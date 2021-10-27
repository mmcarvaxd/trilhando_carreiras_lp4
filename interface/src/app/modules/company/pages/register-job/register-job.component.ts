import { Router } from '@angular/router';
import { JobService } from './../../../../shared/services/job.service';
import { Job } from './../../../../shared/Classes/Job';
import { Component, OnInit } from '@angular/core';
import { CompanyState } from '../../store/states/company.state';
import { Store } from '@ngxs/store';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'tc-register-job',
  templateUrl: './register-job.component.html',
  styleUrls: ['./register-job.component.scss']
})
export class RegisterJobComponent implements OnInit {
  job: Job = new Job()
  requirements: string = ""
  constructor(private jobService: JobService, private store: Store, private _service: NotificationsService, private router: Router) { }

  ngOnInit(): void {
    const _id = this.store.selectSnapshot(CompanyState._id);
    this.job.companyId = _id || ""
  }

  async saveJob() {
    this.job.requirements = this.requirements.split(",")

    try {
      await this.jobService.saveJob(this.job)
      this._service.success('Sucesso...', `Vaga criada com sucesso`, {
        timeOut: 3000,
        showProgressBar: false,
        pauseOnHover: true,
        clickToClose: true
      })
      this.router.navigate(['company', 'job', 'list'])
    } catch (error) {
      this._service.error('Ocorreu um erro...', `Não foi possivel criar a vaga!`, {
        timeOut: 3000,
        showProgressBar: false,
        pauseOnHover: true,
        clickToClose: true
      })
    }
  }
}
