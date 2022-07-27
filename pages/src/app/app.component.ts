import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the Beach ',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Forest',
      url: 'https://images.unsplash.com/photo-1542202229-7d93c33f5d07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Desert',
      url: 'https://images.unsplash.com/photo-1559767180-47d8f4919e5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVzZXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At Space',
      url: 'https://images.unsplash.com/photo-1608178398319-48f814d0750c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNub3d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Beach ',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Forest',
      url: 'https://images.unsplash.com/photo-1542202229-7d93c33f5d07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Desert',
      url: 'https://images.unsplash.com/photo-1559767180-47d8f4919e5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVzZXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At Space',
      url: 'https://images.unsplash.com/photo-1608178398319-48f814d0750c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNub3d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Beach ',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Forest',
      url: 'https://images.unsplash.com/photo-1542202229-7d93c33f5d07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Desert',
      url: 'https://images.unsplash.com/photo-1559767180-47d8f4919e5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVzZXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At Space',
      url: 'https://images.unsplash.com/photo-1608178398319-48f814d0750c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNub3d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Beach ',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Forest',
      url: 'https://images.unsplash.com/photo-1542202229-7d93c33f5d07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Desert',
      url: 'https://images.unsplash.com/photo-1559767180-47d8f4919e5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVzZXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At Space',
      url: 'https://images.unsplash.com/photo-1608178398319-48f814d0750c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNub3d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Beach ',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Forest',
      url: 'https://images.unsplash.com/photo-1542202229-7d93c33f5d07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Desert',
      url: 'https://images.unsplash.com/photo-1559767180-47d8f4919e5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVzZXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At Space',
      url: 'https://images.unsplash.com/photo-1608178398319-48f814d0750c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNub3d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Beach ',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Forest',
      url: 'https://images.unsplash.com/photo-1542202229-7d93c33f5d07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Desert',
      url: 'https://images.unsplash.com/photo-1559767180-47d8f4919e5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVzZXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At Space',
      url: 'https://images.unsplash.com/photo-1608178398319-48f814d0750c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNub3d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
  ];

  getClass() {
    const classes = [];
  }

  upDateCurrent(idx: number) {
    this.currentPage = idx;
  }

  goNext() {
    if (this.currentPage < this.images.length) this.currentPage++;
  }

  goPrev() {
    if(this.currentPage > 0) this.currentPage--;
  }

  checkWindowIndex(i: number) {
    return Math.abs(this.currentPage - i) < 3;
  }
  //{active: i === currentPage}
}
