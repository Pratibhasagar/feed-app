import { Component, Input, OnInit } from '@angular/core';
import { Article } from './../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input('article') article: Article;

  public upvote() {
    this.article.voteUp();
    console.log("Upvote called");
  }
  public downvote() {
    this.article.voteDown();
    console.log("Downvote called");
  }

  ngOnInit() {
  }

}
