import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-choose-us',
  templateUrl: './choose-us.component.html',
  styleUrls: ['./choose-us.component.css'],
})
export class ChooseUsComponent implements OnInit {
  @Input() items: any = [];
  openItem = 0;

  constructor() {}

  ngOnInit(): void {}

  handleIndex(i: number) {
    if (this.openItem == i) {
      this.openItem = -1;
    } else {
      this.openItem = i;
    }
  }
}
