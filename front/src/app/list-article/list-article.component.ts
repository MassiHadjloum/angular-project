import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css'],
})
export class ListArticleComponent implements OnInit {
  articles: any; // Observable<Article[]>;// = ARTICLE;
  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.fetchArticles();
    this.service.RefreshRequired.subscribe((res) => {
      this.fetchArticles();
    });
  }

  private fetchArticles() {
    return this.service.getAllArticals().subscribe((artcl) => {
      this.articles = Object.values(artcl)[0];
    });
  }

  editArticle(id: number) {
    this.router.navigate(['/edit-article', id]);
    //console.log(this.articles[idx]);
  }

  removeArticle(id: number) {
    this.service.removeArticle(id).subscribe((res) => console.log(res));
  }
}
