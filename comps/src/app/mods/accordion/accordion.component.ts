import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  @Input() items: any[] = [];
  openItemIndex = 0;
  constructor() {}

  ngOnInit(): void {}

  onHide(idx: number) {
    if(idx === this.openItemIndex) {
      this.openItemIndex = -1;
    } else {
      this.openItemIndex = idx
    }
  }

}
