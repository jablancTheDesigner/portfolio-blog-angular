import { Component, Input, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {

  @Input() title: string;
  @Input() typedClass: string;
  @Input() align: 'left'|'center' = 'left';

  constructor() { }

  ngOnInit(): void { }

}
