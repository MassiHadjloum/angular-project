import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-pricing',
  templateUrl: './our-pricing.component.html',
  styleUrls: ['./our-pricing.component.css']
})
export class OurPricingComponent implements OnInit {
  @Input() priceMonth: number = 0;
  @Input() priceYear: number = 0;
  @Input() plan: String = "";
  @Input() type: String = "";
  @Input() projects: String = "";
  @Input() name: String = "";
  @Input() list: any = [];

  checked = false;
  constructor() { }

  ngOnInit(): void {
  }



  handleCheck () {
    this.checked = !this.checked;
    console.log("loged one time", this.checked);
  }
}
