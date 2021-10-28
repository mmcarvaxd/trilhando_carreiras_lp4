import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { UserState } from '../../store/states/user.state';

@Component({
  selector: 'tc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userName: string | null = ""
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.userName = this.store.selectSnapshot(UserState.userName)
  }

}
