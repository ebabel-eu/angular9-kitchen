import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Angular9 Kitchen';
  lead: string = 'Organise your shopping lists and recipes';

  constructor() { }

  ngOnInit(): void {
  }

}
