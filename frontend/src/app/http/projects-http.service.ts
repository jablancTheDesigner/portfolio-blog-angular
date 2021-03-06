import { Injectable } from '@angular/core';
import axios from 'axios';
import { Projects } from 'src/assets/projects.data';

@Injectable({
  providedIn: 'root'
})
export class ProjectsHttpService {

  projects: any[] = [
    {
      id: 1,
      title: 'My Portfolio',
      client: 'Me, Myself, and I',
      codeLink: 'https://github.com/jablancTheDesigner/portfolio-blog-angular',
      logo: {
        src: 'https://via.placeholder.com/350x150'
      },
      thumbnail: {
        src: 'https://via.placeholder.com/750x469'
      },
      gallery: [
        {
          src: 'https://via.placeholder.com/750x469'
        },
        {
          src: 'https://via.placeholder.com/750x469'
        },
        {
          src: 'https://via.placeholder.com/750x469'
        }
      ],
      tools: ['Angular', 'Typescript', 'SCSS', 'Tailwind CSS'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Aliquet eget sit amet tellus cras. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum.'
    },
    {
      id: 2,
      title: 'Puffessional',
      client: 'Puffessional',
      logo: {
        src: 'https://via.placeholder.com/350x150'
      },
      thumbnail: {
        src: 'https://via.placeholder.com/750x469'
      },
      gallery: [
        {
          src: 'https://via.placeholder.com/750x469'
        },
        {
          src: 'https://via.placeholder.com/750x469'
        },
        {
          src: 'https://via.placeholder.com/750x469'
        }
      ],
      url: { link: 'https://puffessional.netlify.app/', name: 'Puffessional.com' },
      tools: ['Angular', 'Typescript', 'SCSS', 'Tailwind CSS'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Aliquet eget sit amet tellus cras. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum.'
    },
    {
      id: 3,
      title: ' Countdown Timer App',
      client: 'Freelance',
      thumbnail: {
        src: 'https://via.placeholder.com/750x469'
      },
      gallery: [
        {
          src: 'https://via.placeholder.com/750x469'
        },
        {
          src: 'https://via.placeholder.com/750x469'
        },
      ],
      url: { link: 'https://jablancthedesigner.github.io/countdown-timer/', name: 'Countdown Timer' },
      tools: ['React', 'SCSS', 'Tailwind CSS'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Aliquet eget sit amet tellus cras. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum.'
    }
  ];

  constructor() { }

  findProjects(): Promise<any[]> {
    return new Promise((res, rej) => {
      res(Projects);
    })
  }

  findProjectById(id: number): Promise<any> {
    return new Promise((res, rej) => {
      let output = Projects.find(project => project.id == id);
      res(output);
    })
  }
}
