import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css'],
})
export class Section2Component implements OnInit {
  dataCard = [
    {
      icon: 'uil uil-phone-volume',
      title: '24/7 Support',
      content:
        'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.',
      trailing: 'Learn More',
    },
    {
      icon: 'uil uil-shield-exclamation',
      title: 'Secure Payments',
      content:
        'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.',
      trailing: 'Learn More',
    },
    {
      icon: 'uil uil-laptop-cloud',
      title: 'Daily Updates',
      content:
        'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.',
      trailing: 'Learn More',
    },
    {
      icon: 'uil uil-chart-line',
      title: 'Market Research',
      content:
        'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.',
      trailing: 'Learn More',
    },
  ];
  dataAccordion = [
    {
      title: 'Professional Design',
      content:
        'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.',
    },
    {
      title: 'Top-Notch Support',
      content:
        'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.',
    },
    {
      title: 'Header and Slider Options',
      content:
        'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.',
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
