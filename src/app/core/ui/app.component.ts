import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

	navOpen:boolean = false;

	navToggleHandler(open:boolean) {
		this.navOpen = !this.navOpen;
	}
}
