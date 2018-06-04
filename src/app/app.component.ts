import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  template: `
  <div>
    This is article
    {{articleVar.title}}
    {{articleVar.desc}}
  </div>
  `
})
export class ArticleComponent{
  @Input('article') articleVar: Article;

}

@Component({
  selector: 'app-root',
  template: `
  <h1> My template has title {{title}} </h1>
  <app-sidebar></app-sidebar>
  <app-article
    *ngFor="let article of articles"
    [article]=article >
  </app-article>
  `
})
export class AppComponent {
  title = 'app';
  articles = [
    new Article("This is 1st title", "This is 1st description", new Date()),
    new Article("This is 2nd title", "This is 2nd description", new Date()),
    new Article("This is 3rd title", "This is 3rd description", new Date())];

}

export class Article {
  public title: string;
  public desc: string;
  public date: Date;

  constructor(
    aTitle: string,
    aDesc: string,
    aDate: Date
  ) {
    this.title = aTitle;
    this.desc = aDesc;
    this.date = aDate;
  }
}


@Component({
  selector: 'app-sidebar',
  template: `
  <div>
    This is side bar
  </div>
  `
})
export class SidebarComponent{}
