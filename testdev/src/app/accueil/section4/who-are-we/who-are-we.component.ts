import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-are-we',
  templateUrl: './who-are-we.component.html',
  styleUrls: ['./who-are-we.component.css']
})
export class WhoAreWeComponent implements OnInit {
  data: String[][] = [
    [
      'Aenean eu leo quam ornare curabitur blandit tempus.',
      'Nullam quis risus eget urna mollis ornare donec elit.',
    ],
    [
      'Etiam porta sem malesuada magna mollis euismod.',
      'Fermentum massa vivamus faucibus amet euismod.',
    ],
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
