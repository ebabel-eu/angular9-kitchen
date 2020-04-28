import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Angular9 Kitchen';
  collapsed: boolean = true;
  currentPage: string = 'shopping-list';
  @Output() pageUpdated = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onUpdatePage(page: string): void {
    this.currentPage = page;
    this.pageUpdated.emit(page);
  }
}