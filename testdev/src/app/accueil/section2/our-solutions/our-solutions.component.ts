import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-solutions',
  templateUrl: './our-solutions.component.html',
  styleUrls: ['./our-solutions.component.css'],
})
export class OurSolutionsComponent implements OnInit {
  data: String[][] = [
    [
      'Aenean quam ornare. Curabitur blandit.',
      'Nullam quis risus eget urna mollis ornare.',
    ],
    [
      'Etiam porta euismod malesuada mollis.',
      'Vivamus sagittis lacus vel augue rutrum.',
    ],
  ];
  constructor() {}

  ngOnInit(): void {}
}
