import { Component, Input, OnInit } from '@angular/core';
import { ActionsEnum } from '../../enums/ActionsEnum.enum';

@Component({
  selector: 'tc-action-card',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.scss']
})
export class ActionCardComponent implements OnInit {
  @Input() action?: ActionsEnum = 1
  @Input() title: string = ""
  @Input() description: string = ""
  @Input() link: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
