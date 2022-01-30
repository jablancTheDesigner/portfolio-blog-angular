import { Component, Input, OnInit } from '@angular/core';
import { PostsHttpService } from 'src/app/http/posts-http.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() posts: any[] = [];

  color = 'color-main';

  constructor() { }

  ngOnInit() { }

}
