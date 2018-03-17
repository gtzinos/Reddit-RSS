import { Component, OnInit } from "@angular/core";
import { RedditService } from "../../providers/reddit.service";
@Component({
  selector: "app-subreddis",
  templateUrl: "./subreddis.component.html",
  styleUrls: ["./subreddis.component.scss"]
})
export class SubreddisComponent implements OnInit {
  filters = ["rss", "user"];
  selectedFilter = "rss";
  subreddits = [];
  articles = [];
  selectedFilterValue = "";

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
    if (this.selectedFilter === 'rss') {
      this.redditService
        .getSubRedditsArticles(this.selectedFilterValue)
        .subscribe((articles: any) => {
          this.updateArticles(articles);
        });
    } else {
      this.redditService
        .getUserArticles(this.selectedFilterValue)
        .subscribe((articles: any) => {
          this.updateArticles(articles);
        });
    }
  }

  updateArticles(articles: any) {
    if (articles && articles.data && articles.data.children) {
      this.articles = articles.data.children;
    }
  }
}
