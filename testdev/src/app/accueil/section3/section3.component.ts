import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css'],
})
export class Section3Component implements OnInit {
  dataCards = [
    {
      srcImage: '../../assets/img/photos/b4.jpg',
      title: 'Ligula tristique quis risus',
      content:
        'Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.',
      date: '14 Apr 2021',
      footer: 'Coding',
    },
    {
      srcImage: '../../assets/img/photos/b5.jpg',
      title: 'Nullam id dolor elit id nibh',
      content:
        'Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.',
      date: '29 Mar 2021',
      footer: 'Workspace',
    },
    {
      srcImage: '../../assets/img/photos/b6.jpg',
      title: 'Ultricies fusce porta elit',
      content:
        'Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.',
      date: '26 Feb 2021',
      footer: 'Meeting',
    },
    {
      srcImage: '../../assets/img/photos/b4.jpg',
      title: 'Morbi leo risus porta eget',
      content:
        'Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.',
      date: '7 Jan 2021',
      footer: 'Business Tips',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
