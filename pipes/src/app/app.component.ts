import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: string = '';
  miles: number = 0;
  celsius: number = 0;

  onNameChange(val: any){
    this.name = val.value;
  }

  onDateChange(val: any){
    this.date = val.value;
  }

  onAmountChange(val: any){
    this.amount = val.value;
  }

  onMilesChange(val: any){
    this.miles = val.value;
  }

  onCelsiusChange(val: any){
    this.celsius = val.value;
  }


}
