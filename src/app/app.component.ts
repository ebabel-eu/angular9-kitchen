import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navigateToPage: string = 'shopping-list';

  togglePage(page: string) {
    this.navigateToPage = page;
  } 
}
