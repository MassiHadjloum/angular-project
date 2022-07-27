import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() srcImage = "";
  @Input() title = "";
  @Input() content = "";
  @Input() date = "";
  @Input() footer = "";

  constructor() { }

  ngOnInit(): void {
  }

}
