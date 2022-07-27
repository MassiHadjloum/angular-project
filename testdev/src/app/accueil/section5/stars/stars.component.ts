import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css'],
})
export class StarsComponent implements OnInit {
  data = [
    {
      title:
        '“Vivamus sagittis lacus augue laoreet rutrum faucibus auctor vestibulum ligula porta felis,euismod semper cras justo odio consectetur.”',
      author: 'Corris Ambady',
      work: 'Financial Analyst',
    },
    {
      title:
        '“Vivamus sagittis lacus augue laoreet rutrum faucibus auctor vestibulum ligula porta felis,euismod semper cras justo odio consectetur.”',
      author: 'Cory Zamora',
      work: 'Marketing Specialist',
    },
    {
      title:
        '“Vivamus sagittis lacus augue laoreet rutrum faucibus auctor vestibulum ligula porta felis,euismod semper cras justo odio consectetur.”',
      author: 'Nikolas Brooten',
      work: 'Sales Manager',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
