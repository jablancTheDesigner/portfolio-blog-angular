import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-image-card',
  templateUrl: './project-image-card.component.html',
  styleUrls: ['./project-image-card.component.scss']
})
export class ProjectImageCardComponent implements OnInit {

  @Input() project: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.project);
  }

}
