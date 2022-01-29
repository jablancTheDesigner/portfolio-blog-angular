import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  project: any = {};
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
      console.log(data)
      if (data.project) {
        this.project = data.project;
        this.parseDescription(this.project);
        this.checkToole(this.project)
      }
    })
  }

  parseDescription = (data: any) => {
    console.log(data.description)
    this.projectDescription = data.description;
    // this.parseDescription = data;
  }


  checkToole = (data: any) => {
    this.tools = data.tools.length > 0 ? data.tools : null;
  }

}
