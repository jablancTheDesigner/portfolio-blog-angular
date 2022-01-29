import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProjectsHttpService {

  projects: any[] = [
    {
      id: 1,
      title: 'title 1',
      client: 'Smith & Williams Trial Group',
      url: { link: '', name: '' },
      tools: [],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Aliquet eget sit amet tellus cras. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum. Nunc scelerisque viverra mauris in aliquam sem fringilla. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Habitant morbi tristique senectus et netus et malesuada fames. Mi quis hendrerit dolor magna eget.'
    },
  ];

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
}
