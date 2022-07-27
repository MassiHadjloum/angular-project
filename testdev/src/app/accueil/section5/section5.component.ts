import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.css'],
})
export class Section5Component implements OnInit {
  dataPricing = [
    {
      priceMonth: 9,
      priceYear: 99,
      plan: 'Basic Plan',
      list: [
        { projects: 1, type: '', name: 'Projects' },
        { projects: 100, type: 'K', name: 'API Access' },
        { projects: 100, type: 'MB', name: 'Storage' },
        { projects: 'Weekly', type: '', name: 'Reports' },
        { projects: '7/24', type: '', name: 'Support' },
      ],
    },
    {
      priceMonth: 19,
      priceYear: 199,
      plan: 'Premium Plan',
      list: [
        { projects: 5, type: '', name: 'Projects' },
        { projects: 100, type: 'K', name: 'API Access' },
        { projects: 500, type: 'MB', name: 'Storage' },
        { projects: 'Weekly', type: '', name: 'Reports' },
        { projects: '7/24', type: '', name: 'Support' },
      ],
    },
    {
      priceMonth: 49,
      priceYear: 499,
      plan: 'Corporate Plan',
      list: [
        { projects: 20, type: '', name: 'Projects' },
        { projects: 300, type: 'K', name: 'API Access' },
        { projects: 500, type: 'MB', name: 'Storage' },
        { projects: 'Weekly', type: '', name: 'Reports' },
        { projects: '7/24', type: '', name: 'Support' },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
