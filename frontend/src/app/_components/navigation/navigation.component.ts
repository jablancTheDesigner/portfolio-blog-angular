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

  displayElem: boolean = false;

  openLinks:boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navigator: NavigatorService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
    })
  }

  goToAnchor = (params: string) => {
    setTimeout(() => this.navigator.goTo(params))
  }

  onWindowScroll = (event: Event) => {
    let element = this.getScrollingElement();
    this.displayElem = element.scrollTop >= 150 ? true : false;
  }

  getScrollingElement(): Element {
    return document.scrollingElement || document.documentElement;
  }

  menuStatus(): void {
    this.openLinks = !this.openLinks;
  }

}
