import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mat-detail',
  templateUrl: './mat-detail.component.html',
  styleUrls: ['./mat-detail.component.css']
})
export class MatDetailComponent implements OnInit {
  @Input() data: String[][] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
