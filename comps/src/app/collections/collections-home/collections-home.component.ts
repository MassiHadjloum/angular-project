import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    { name: 'massi', age: 23, job: 'student' },
    { name: 'yanis', age: 22, job: 'coauch' },
    { name: 'farnous', age: 22, job: 'spiderman' },
  ];
  headers = [
    { key: 'name', label: 'Name'},
    { key: 'age', label: 'Age'},
    { key: 'job', label: 'Job'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
