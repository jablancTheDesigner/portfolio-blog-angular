import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProjectsHttpService {

  projects: any[] = [
    { id: 1, title: 'title 1', description: 'Something' },
    { id: 2, title: 'title 2' },
    { id: 3, title: 'title 3' },
    { id: 4, title: 'title 4' }
  ];
  posts: any[] = [
    { id: 1, title: 'post 1' },
    { id: 2, title: 'post 2' },
    { id: 3, title: 'post 3' },
    { id: 4, title: 'post 4' }
  ];

  baseUrl = 'http://localhost:1337';
  projectsUrl = this.baseUrl + '/projects/';

  constructor() { }

  findProjects(): Promise<any[]> {
    return new Promise((res, rej) => {
      res(this.projects);
    })
  }

  findProjectById(id: number): Promise<any> {
    return new Promise((res, rej) => {
      let output = this.projects.find(project => project.id == id);
      res(output);
    })
  }

  findPosts(): Promise<any[]> {
    return new Promise((res, rej) => {
      res(this.posts);
    })
  }

  findPostById(id: number): Promise<any> {
    return new Promise((res, rej) => {
      let output = this.posts.find(post => post.id == id);
      res(output);
    })
  }
}
