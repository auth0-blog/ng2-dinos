import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

	// ported from nav-control directive with intentions of absorbing that directive
	public navOpen:boolean = false;

	public constructor() { 
		
	}

	ngOnInit() {
		console.log('hello from APP');
	}

	onToggleNav(event) {
		console.log('toggle nav', event);
	}
	
	onOpen(event) {
		console.log('open navigation');
	}

	onClose() {
		console.log('close navigation');
	}
}
