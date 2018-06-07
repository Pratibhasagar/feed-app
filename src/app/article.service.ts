import { Injectable } from '@angular/core';
import { Article } from './article';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const baseUrl = 'https://newsapi.org';
const newsApiKey = 'b4c105ccd4a94dc39c81e88c09b66dd4';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private http: Http;
  constructor(http: Http) {
    this.http = http;
   }

  public getArticles(): Promise< Article[] > {
    let params = new URLSearchParams();
    params.set('apiKey', newsApiKey);
    params.set('source', 'reddit-r-all');
    return this.http
      .get(`${baseUrl}/v1/articles`, {search: params})
      .toPromise()
      .then(resp => resp.json())
      .then(json => json.articles)
      .then(articles => {
        const list = articles.map(
          article => new Article(article.title, article.description, article.urlToImage, 5)
        )
        console.log('json -> ', list);
        return list;
      })
      .catch(err => console.log('got an error', err));
    // return Promise.resolve( [
    //   new Article("This is first title", "This is first content", 10),
    //   new Article("This is second title", "This is second content", 7)])
  }
}
