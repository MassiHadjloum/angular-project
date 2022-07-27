import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-col-title',
  templateUrl: './col-title.component.html',
  styleUrls: ['./col-title.component.css']
})
export class ColTitleComponent implements OnInit {

  @Input() classRow = '';
  @Input() classCol = '';
  @Input() classTitle = '';
  @Input() classSubTitle = '';
  @Input() classContent = '';
  @Input() title = '';
  @Input() subTitle = '';
  @Input() content = '';
  @Input() ID = '';
  constructor() { }

  ngOnInit(): void {
  }

}
