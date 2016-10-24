import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	navOpen:boolean = false;
	
	toggleNav() {
		this.navOpen = !this.navOpen;

		if (this.navOpen) {
			console.log('open nav');
		} else {
			console.log('close nav');
		}
	}

}
