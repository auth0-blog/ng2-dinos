import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[navControl]'
})
export class NavControlDirective {

  constructor(el: ElementRef, renderer: Renderer) { 
		console.log('hi from navControl');
	}

}
