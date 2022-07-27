import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      userName: 'nature',
      content: 'I saw this neat tree today',
      imageUrl: 'assets/tree.jpeg',
    },
    {
      title: 'Snowy Mountain',
      userName: 'mountainlover',
      content: 'Here is a picture of a snowy mountain',
      imageUrl: 'assets/mountain.jpeg',
    },
    {
      title: 'Mountain Biking',
      userName: 'biking',
      content: 'I did some biking todaye',
      imageUrl: 'assets/biking.jpeg',
    },
  ];
}
