import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-t',
  templateUrl: './card-t.component.html',
  styleUrls: ['./card-t.component.css']
})
export class CardTComponent implements OnInit {
  @Input() title = "";
  @Input() srcImage = "";
  @Input() content = "";

  constructor() { }

  ngOnInit(): void {
  }

}
