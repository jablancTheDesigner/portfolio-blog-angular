import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { Post } from 'src/app/domain/post';
import { Project } from 'src/app/domain/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects: Project[] = [];
  posts: Post[] = [];
  featuredPost: Post = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      if (data.projects) {
        this.projects = data.projects;
        this.posts = data.posts;
      }
    })
  }

}
