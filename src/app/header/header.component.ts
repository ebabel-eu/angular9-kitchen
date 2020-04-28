import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Angular9 Kitchen';
  collapsed: boolean = true;
  @Input() currentPage: string;

  constructor() { }

  ngOnInit(): void {
  }
}