import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  experiences: any[] = [
    {
      position: 'Software Engineer III',
      company: 'Westgate Resorts',
      dateStart: '2021',
      dateEnd: null,
      recent: true
    },
    {
      position: 'Software Engineer II',
      company: 'Westgate Resorts',
      dateStart: '2019',
      dateEnd: '2021',
    },
    {
      position: 'Front-end Developer',
      company: 'Global Tech Network',
      dateStart: '2017',
      dateEnd: '2019',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
