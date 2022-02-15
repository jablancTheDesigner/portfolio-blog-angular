import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigatorService } from 'src/app/services/navigator.service';
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
    'experience',
    'contact'
  ];

  mobileShow: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navigator: NavigatorService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.setNavigation(data);
    })
  }

  setNavigation = (data: any) => {
    this.isMain = data.isMainNav ? data.isMainNav : false;
  }


  goToAnchor = (params: string) => {
    this.setMobileShow(false);
    setTimeout(() => this.navigator.goTo(params))
  }

  onWindowScroll = (event: Event) => {
    let element = this.getScrollingElement();
    this.displayElem = element.scrollTop >= 150 ? true : false;
  }

  getScrollingElement(): Element {
    return document.scrollingElement || document.documentElement;
  }

  setMobileShow(show: boolean): void {
    if (show) {
      document.body.classList.add('nav-fixed')
    } else {
      document.body.classList.remove('nav-fixed')
    }
    this.mobileShow = show;
  }

}
