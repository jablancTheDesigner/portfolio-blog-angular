import { Component, OnInit } from '@angular/core';
import { PostsHttpService } from 'src/app/http/posts-http.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: any[] = [];

  color = 'color-main';

  constructor(private postsHttpService: PostsHttpService) { }

  ngOnInit() {
    this.postsHttpService.findPosts().then(data => this.posts = data)
  }

}
