import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { Post } from 'src/app/domain/post';
import { Project } from 'src/app/domain/project';
import { NavigatorService } from 'src/app/services/navigator.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects: Project[] = [];
  posts: Post[] = [];
  featuredPost: Post = null;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navigator: NavigatorService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      if (data.projects) {
        this.projects = data.projects;
        this.posts = data.posts;
      }
    })
    let typed = new Typed('.typed', {
      strings: ["Web Designer ", "Self Taught Developer ", "Console Gamer", "Football Coach", "Part-time Adult "],
      typeSpeed: 50,
      backSpeed: 50,
      smartBackspace: true, // this is a default
      loop: true,
      backDelay: 1000,
      startDelay: 0,
      cursorChar: '_'
    });
  }

  goToContact = () => {
    this.navigator.goTo('contact')
  }

}
