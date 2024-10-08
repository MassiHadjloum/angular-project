import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() icon : string = "";
  @Input() title : string = "";
  @Input() content : string = "";
  @Input() trailing : string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
