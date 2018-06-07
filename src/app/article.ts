export class Article {

  public title: string;
  public desc: string;
  public imageUrl:string;
  public votes ?: number;

  constructor(
    aTitle: string,
    aDesc: string,
    url: string,
    votes: number
  ) {
    this.title = aTitle;
    this.desc = aDesc;
    this.imageUrl = url;
    this.votes = votes || 0;

  }

  public date(): Date {
    return new Date();
  }

  public voteUp(): void {
    this.votes++;
  }

  public voteDown(): void {
    this.votes--;
  }

}
