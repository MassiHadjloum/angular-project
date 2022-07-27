import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css'],
})
export class PlaceholderComponent implements OnInit {
  constructor() {}

  @Input() header = true;
  @Input() lines = 3;

  ngOnInit(): void {}
}
