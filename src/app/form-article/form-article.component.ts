import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../article';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-form-article',
  templateUrl: './form-article.component.html',
  styleUrls: ['./form-article.component.css'],
})
export class FormArticleComponent implements OnInit {
  article: Article = new Article();
  @Input() isAddArticle: boolean;
  constructor(
    private service: ServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.service.RefreshRequired.subscribe((res) => {});
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.getOneArticle(+id).subscribe((artcl) => {
        this.article.titre = Object.values(artcl)[1][0].titre;
        this.article.id = +id;
        this.article.description = Object.values(artcl)[1][0].description;
        this.article.published =
          Object.values(artcl)[1][0].published === 0 ? false : true;
        this.article = Object.values(artcl)[1][0];
      });
    }
  }

  resetProps() {
    this.article.description = '';
    this.article.published = false;
    this.article.titre = '';
  }

  onSubmit() {
    if (this.isAddArticle) {
      this.service.addArticle(this.article).subscribe((artcl) => {});
    } else {
      this.service.updateArticle(this.article).subscribe((a) => {
        this.router.navigate(['']);
      });
    }
    this.resetProps();
  }
}
