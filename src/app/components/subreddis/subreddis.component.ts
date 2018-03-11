import { Component, OnInit } from "@angular/core";
import { RedditService } from "../../providers/reddit.service";
@Component({
  selector: "app-subreddis",
  templateUrl: "./subreddis.component.html",
  styleUrls: ["./subreddis.component.scss"]
})
export class SubreddisComponent implements OnInit{
  subreddits = [];
  articles = [];
  selectedArticleName = '';

  constructor(public redditService: RedditService) {}


  ngOnInit() {
    this.getAllArticles();
  }

  getAllArticles() {
    this.redditService.getRssArticles().subscribe((articles: any) => {
      if (articles && articles.data && articles.data.children) {
        this.articles = articles.data.children;
      }
    });
  }

  searchArticles() {
    this.redditService.getSubRedditsArticles(this.selectedArticleName).subscribe((articles: any) => {
      if (articles && articles.data && articles.data.children) {
        this.articles = articles.data.children;
      }
    });
  }
}
