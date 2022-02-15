import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {

  constructor() { }

  goTo = (elementId: string): void => {
    document.getElementById(elementId).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

}
