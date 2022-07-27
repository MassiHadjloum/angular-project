import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private password: string = "";
  letters = false;
  numbers = false;
  symbole = false;
  length = 0;


  onButtonClick(){
    const numbers = '1234567890';
    const letters = 'azertyuiopqsdfghjklmwxcvbn';
    const symbole = '!%$^@&*=+-_()[]#€';

    let valide = '';
    if(this.letters) {
      valide += letters;
    }
    if(this.numbers){
      valide += numbers;
    }
    if(this.symbole){
      valide += symbole;
    }

    let generatedpass = "";
    for(let i=0; i<this.length; i++){
      const idx = Math.floor(Math.random() * valide.length);
      generatedpass += valide.charAt(idx);
    }
    this.password = generatedpass;
  }

  onChangeLength(target: any){
    this.length = parseInt(target.value);
  }

  getPassword(){
    return this.password;
  }
  onChangeUseLetters() {
    this.letters = !this.letters;
  }
  onChangeUseNumbers() {
    this.numbers = !this.numbers;
  }
  onChangeUseSymbols() {
    this.symbole = !this.symbole;
  }
}
