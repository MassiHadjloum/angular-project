import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css'],
})
export class OurTeamComponent implements OnInit {
  data = [
    {
      srcImage: './assets/img/avatars/t1.jpg',
      title: 'Coriss Ambady',
      content: 'Financial Analyst',
    },
    {
      srcImage: './assets/img/avatars/t2.jpg',
      title: 'Cory Zamora',
      content: 'Marketing Specialist',
    },
    {
      srcImage: './assets/img/avatars/t3.jpg',
      title: 'Nikolas Brooten',
      content: 'Sales Manager',
    },
    {
      srcImage: './assets/img/avatars/t4.jpg',
      title: 'Jackie Sanders',
      content: 'Investment Planner',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
