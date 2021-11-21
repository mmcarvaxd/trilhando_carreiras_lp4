import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tc-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() title = ''
  @Input() fieldType = 'text'
  @Input() fieldValue: any
  @Input() isValid: boolean = true
  @Input() isDisabled: boolean = false
  @Output() fieldValueChange: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  valueChanged() {
    this.fieldValueChange.emit(this.fieldValue)
  }
}
