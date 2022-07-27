import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-pricing',
  templateUrl: './detail-pricing.component.html',
  styleUrls: ['./detail-pricing.component.css'],
})
export class DetailPricingComponent implements OnInit {
  detailPricing: any = [
    [
      {
        title: 'Can I cancel my subscription?',
        content:
          'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas.',
      },
      {
        title: 'Which payment methods do you accept?',
        content:
          'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas.',
      },
    ],
    [
      {
        title: 'How can I manage my Account?',
        content:
          'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas.',
      },
      {
        title: 'Is my credit card information secure?',
        content:
          'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas.',
      },
    ],
  ];
  constructor() {}

  ngOnInit(): void {}
}
