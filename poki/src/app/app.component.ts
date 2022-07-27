import { filter, from, map, Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  namee: string;
  ngOnInit(): void {
    this.log();
  }

  log() {
    const observable = new Observable((sub) => {
      sub.next(1);
      sub.next('azul dina');
      sub.next('hello world');
      const clg = setInterval(() => {
        sub.next('rohhh');
      }, 1000);
      //sub.complete();
    });

    const obs2 = from([
      { name: 'massi', age: 23 },
      10,
      20,
      30,
      'azul fellawen',
    ]);
    //obs2.subscribe(x => console.log(x));

    const obs3 = of(1, 2, 3, 4, 5).pipe(
      map(x => x*x),

    )

    //observable.subscribe((x) => console.log(x));
  }
}
