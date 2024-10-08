import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages: any[] = [];
  constructor(private wikipedia: WikipediaService) {}
  onTerm(term: string) {
    const res = this.wikipedia.search(term).subscribe((res: any) => {
      this.pages = res.query.search;
      console.log('response', res.query.search);

    });
  }
}
