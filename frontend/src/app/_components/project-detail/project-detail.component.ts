import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { Project } from 'src/app/domain/project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  project: Project;
  id: number = null;
  error: string = null;
  color = 'color-main';
  projectDescription: string = '';
  tools: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      if (data.project) {
        this.project = data.project;
        this.parseDescription(this.project);
        this.checkTools(this.project);
      }
    })
  }

  parseDescription = (data: any) => {
    this.projectDescription = data.description;
    // this.parseDescription = data;
  }


  checkTools = (data: any) => {
    this.tools = data.tools.length > 0 ? data.tools : null;
  }

}
