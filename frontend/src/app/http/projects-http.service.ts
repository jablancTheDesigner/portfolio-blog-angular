import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProjectsHttpService {

  projects: any[] = [];
  posts: any[] = [];

  baseUrl = 'http://localhost:1337';
  projectsUrl = this.baseUrl + '/projects/';

  constructor() { }

  findProjects(): Promise<any[]> {
    return new Promise((res, rej) => {
      res(this.projects);
    })
  }

  findProjectById(id: number): Promise<any> {
    return axios.get(this.projectsUrl + id);
  }
}
