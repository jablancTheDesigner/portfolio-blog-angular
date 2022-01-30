import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/domain/project';

@Component({
  selector: 'app-project-image-card',
  templateUrl: './project-image-card.component.html',
  styleUrls: ['./project-image-card.component.scss']
})
export class ProjectImageCardComponent implements OnInit {

  @Input() project: Project;

  constructor() { }

  ngOnInit(): void {
  }

}
