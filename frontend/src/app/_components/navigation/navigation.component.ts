import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() textClass: string;

  isMain: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.setNavigation(data);
    })
  }

  setNavigation = (data: any) => {
    this.isMain = data.isMainNav ? data.isMainNav : false;
    console.log(this.isMain)
  }

}
