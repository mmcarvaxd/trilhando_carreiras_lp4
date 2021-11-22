import { UserService } from 'src/app/shared/services/user.service';
import { UserState } from './../../store/states/user.state';
import { Store } from '@ngxs/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from './../../../../shared/Classes/Job';
import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/shared/services/job.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'tc-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  job: Job = new Job()
  isAlreadyApplied: boolean = false
  id = "empty"

  constructor(private jobService: JobService, private aRouter: ActivatedRoute, private store: Store, private userService: UserService, private notificationsService: NotificationsService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    await this.getJob()
  }

  async jobApply() {
  try{
    await this.userService.jobApply(this.job._id || "")
    await this.getJob()
    this.notificationsService.success('Boa!', 'Candidatado à vaga com sucesso!', {
      timeOut: 3000,
      showProgressBar: false,
      pauseOnHover: true,
      clickToClose: true
    })
    this.router.navigate(['user', 'home'])
  } catch (error) {
    this.notificationsService.error('Ocorreu um erro...', 'Não foi possível candidatar-se à vaga!', {
      timeOut: 3000,
      showProgressBar: false,
      pauseOnHover: true,
      clickToClose: true
    })
  }
}
  

  async revokeApply() {
  try{
    await this.userService.revokeJob(this.job._id || "")
    await this.getJob()
    this.notificationsService.success('Aviso:', 'Descadastrado da vaga com sucesso!', {
      timeOut: 3000,
      showProgressBar: false,
      pauseOnHover: true,
      clickToClose: true
    })
    this.router.navigate(['user', 'home'])
  } catch (error) {
    this.notificationsService.error('Ocorreu um erro...', 'Não foi possível descadastrar-se da vaga!', {
      timeOut: 3000,
      showProgressBar: false,
      pauseOnHover: true,
      clickToClose: true
    })
  }
  }

  async getJob() {
    let id: string = this.aRouter.snapshot.params['id']

    this.job = await this.jobService.getJob(id)
    this.id = this.store.selectSnapshot(UserState._id) || ""

    this.isAlreadyApplied = (this.job.candidatesId.filter(c  => this.id === c._id)[0] !== undefined)
  }
}
