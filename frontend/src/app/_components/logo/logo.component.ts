import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  @Input() height: string = '';
  @Input() width: string = '';

  constructor() { }

  ngOnInit() {
  }

}
