import { Component, Input, OnInit } from '@angular/core';
import { Company } from 'src/app/shared/Classes/Company';

@Component({
  selector: 'tc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() company: Company = new Company()
  constructor() { }

  ngOnInit(): void {
  }

}
