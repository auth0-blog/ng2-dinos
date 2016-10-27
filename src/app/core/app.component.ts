import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  navOpen: boolean = false;

  navToggleHandler() {
    this.navOpen = !this.navOpen;
  }
}
