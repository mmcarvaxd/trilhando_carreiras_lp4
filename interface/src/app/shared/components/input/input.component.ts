import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tc-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() title = ''
  @Input() fieldType = ''
  @Input() fieldValue: any
  @Output() fieldValueChange: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  valueChanged() {
    this.fieldValueChange.emit()
  }
}
