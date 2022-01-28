import { Component, OnInit } from '@angular/core';
import { ProjectsHttpService } from 'src/app/http/projects-http.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: any[] = [];

  color = 'color-main';

  constructor(private projectsHttpService: ProjectsHttpService) { }

  ngOnInit() {
    this.projectsHttpService.findPosts().then(data => this.posts = data)
  }

}
