import { Component, Input, OnInit } from '@angular/core';
import { Article } from './../article';
import { ArticleService } from '../article.service';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  private articleService: ArticleService;
  private articles: Article[];

  constructor(aService: ArticleService) {
    this.articleService = aService;
    this.articleService.getArticles()
          .then(articles => this.articles = articles);
  }

  ngOnInit() {
  }

}
