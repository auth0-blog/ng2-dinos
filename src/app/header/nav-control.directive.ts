import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[navControl]'
})
export class NavControlDirective {

  constructor(private el: ElementRef, private renderer: Renderer) { 
		console.log('hi from navControl');
	}

}
