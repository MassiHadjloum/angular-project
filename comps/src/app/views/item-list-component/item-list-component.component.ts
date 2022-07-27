import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list-component',
  templateUrl: './item-list-component.component.html',
  styleUrls: ['./item-list-component.component.css']
})
export class ItemListComponentComponent implements OnInit {
  @Input() data: any[]= [];
  constructor() { }

  ngOnInit(): void {
  }

}
