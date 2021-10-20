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

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      console.log(data)
      if (data.project.data) {
        this.project = data.project.data;
      }
    })
  }

}
