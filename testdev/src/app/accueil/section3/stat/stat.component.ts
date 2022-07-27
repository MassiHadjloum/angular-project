import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css'],
})
export class StatComponent implements OnInit {
  dataStat = [
    { title: 'Completed Projects', nbr: '7518' },
    { title: 'Happy Customers', nbr: '3472' },
    { title: 'Expert Employees', nbr: '2184' },
    { title: 'Awards Won', nbr: '4523' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
