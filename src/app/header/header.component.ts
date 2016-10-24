import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	navOpen:boolean = false;
	@Output() open = new EventEmitter<boolean>();
	@Output() close = new EventEmitter<boolean>();

	toggleNav() {
		this.navOpen = !this.navOpen;

		if (this.navOpen) {
			this.open.emit(null);
			console.log('open event emitted');
		} else {
			this.close.emit(null);
			console.log('close event emitted');
		}
	}

}
