import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-model-edit-article',
  templateUrl: './model-edit-article.component.html',
  styleUrls: ['./model-edit-article.component.css']
})
export class ModelEditArticleComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: ServiceService) { }

  ngOnInit(): void {


  }



}
