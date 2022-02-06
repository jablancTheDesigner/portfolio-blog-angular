import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() textClass: string;

  @ViewChild('body')
  body: ElementRef;

  isMain: boolean = false;

  displayElem: boolean = false;

  links: string[] = [
    'projects',
    'experience'
  ];

  mobileClosed: boolean = true;

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
  }


  goToAnchor = (params: string) => {
    if (!this.mobileClosed) {
      this.openMobile()
    }
    setTimeout(() => {
      document.getElementById(params).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    })
  }

  onWindowScroll = (event: Event) => {
    let element = this.getScrollingElement();
    this.displayElem = element.scrollTop >= 150 ? true : false;
  }

  getScrollingElement(): Element {
    return document.scrollingElement || document.documentElement;
  }

  openMobile(): void {
    if (this.mobileClosed) {
      document.body.classList.add('nav-body--fixed')
      this.mobileClosed = false;
    } else {
      document.body.classList.remove('nav-body--fixed')
      this.mobileClosed = true;
    }

  }


}
