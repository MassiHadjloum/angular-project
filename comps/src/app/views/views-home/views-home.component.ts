import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  statistics = [
    { value: 2200, label: 'Favorites' },
    { value: 9000, label: 'Page Views' },
    { value: 2233, label: 'Users' },
  ];

  data = [
    {
      image:
        'https://media.istockphoto.com/photos/wave-formation-of-the-adriatic-sea-picture-id1222233279?k=20&m=1222233279&s=612x612&w=0&h=k1j68D7PUptyTxJgQ2vnbDCawcFRs5HlnSv__gmcxZI=',
      title: 'ocean',
      description: 'This is the pacific ocean, the begist ocean of the world',
    },
    {
      image:
        'https://media.istockphoto.com/photos/wave-formation-of-the-adriatic-sea-picture-id1222233279?k=20&m=1222233279&s=612x612&w=0&h=k1j68D7PUptyTxJgQ2vnbDCawcFRs5HlnSv__gmcxZI=',
      title: 'ocean',
      description: 'This is the pacific ocean, the begist ocean of the world',
    },
    {
      image:
        'https://media.istockphoto.com/photos/wave-formation-of-the-adriatic-sea-picture-id1222233279?k=20&m=1222233279&s=612x612&w=0&h=k1j68D7PUptyTxJgQ2vnbDCawcFRs5HlnSv__gmcxZI=',
      title: 'ocean',
      description: 'This is the pacific ocean, the begist ocean of the world',
    },

  ];
  constructor() {}

  ngOnInit(): void {}
}
