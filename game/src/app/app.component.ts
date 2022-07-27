import { Component } from '@angular/core';

/* require.resolve('util/');
import 'colors';
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  input = "";

  messages = [
    "Lorem ipsum dolor sit amet",
    "Hello there, are you ok!!!",
    "Azul fellawen, zikenni yella yiwen n uwaghzen.",
    "Yiwen was awaghzen nni yecca alghem,",
    "Mi yecca alghem yusad bab is yerna yeccat uwaghzen,",
    "Azekka nni ussand wat n taddart",
    "Seyyan ad nghen awaghzen dgha yeccaten",
    "Conclusion, win id yussan yeccat uwaghzen"
  ];

  message = this.messages[Math.floor(Math.random() * this.messages.length)];

  getRandomMessage (){
    return this.message;
  }

  onChange(e: any){
      this.input = e.value;
  }

  compare(randomletter: string, inputletter: string){
    if(!inputletter){
      return 'pending';
    }

    return randomletter === inputletter ? 'correct' : 'incorrect'


  }


}
