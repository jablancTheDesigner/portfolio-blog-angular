import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProjectsHttpService {

  baseUrl = 'http://localhost:1337';
  projectsUrl = this.baseUrl + '/projects/';

  constructor() { }

  findProjects(): Promise<any[]> {
    return axios.get(this.projectsUrl);
  }

  findProjectById(id: number): Promise<any> {
    return axios.get(this.projectsUrl + id);
  }
}
