import { Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { CompanyState } from '../../store/states/company.state';

@Component({
  selector: 'tc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  companyName: string | null = ""
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.companyName = this.store.selectSnapshot(CompanyState.companyName)
  }

}
