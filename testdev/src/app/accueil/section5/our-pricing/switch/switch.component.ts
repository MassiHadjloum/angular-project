import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  @Input() checked = false;
  @Output() handelCheck = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  changeCheck () {
    this.checked = true;//!this.checked;
    console.log("first", this.checked);

    this.handelCheck.emit(this.checked);
  }



}
