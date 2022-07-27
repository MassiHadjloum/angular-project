import { Article } from './article';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  getway: string = 'http://localhost:5000/api/articles';
  HttpHeaders: HttpHeaders;
  articles: Observable<Article[]>;

  private _refreshrequired = new Subject<void>();

  get RefreshRequired() {
    return this._refreshrequired;
  }

  constructor(private http: HttpClient) {
    this.HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
    });
  }

  getAllArticals(): Observable<Article[]> {
    return this.http.get<Article[]>(this.getway);
  }

  removeArticle(id: number): Observable<Object> {
    return this.http
      .delete(`http://localhost:5000/api/articles/${id}`)
      .pipe(tap(() => this.RefreshRequired.next()));
  }

  getOneArticle(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.getway}/${id}`);
  }

  updateArticle(article: Article): Observable<Object> {
    return this.http.put(
      `http://localhost:5000/api/articles/${article.id}`,
      article
    );
  }

  addArticle(article: Article): Observable<Object> {
    return this.http
      .post(this.getway, article)
      .pipe(tap(() => this.RefreshRequired.next()));
  }
}
