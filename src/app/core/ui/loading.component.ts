import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: '<img class="loading" src="/assets/images/ajax-loader.gif">',
  styles: [`
		.loading { 
			display: block; 
			margin: 30px auto; }
	`]
})
export class LoadingComponent {
  constructor() { }
}
