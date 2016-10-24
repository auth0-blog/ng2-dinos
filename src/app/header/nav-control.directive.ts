import { Directive, OnInit, ElementRef, Renderer } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Directive({
  selector: '[navControl]'
})
export class NavControlDirective {
	initWinHeight = 0;

  public constructor(private el: ElementRef, private renderer: Renderer) { 
		Observable.fromEvent(window, 'resize')
			.debounceTime(200)
			.subscribe((event) => {
				this.resizeFn(event);
			});
	}

	ngOnInit() {
		this.initWinHeight = window.innerHeight;
		this.resizeFn(null);
  }

	private resizeFn(e) {
		// TODO: refactor this not to use this.el.nativeElement?
		let winHeight = e ? e.target.innerHeight : this.initWinHeight;
		this.renderer.setElementStyle(this.el.nativeElement, 'height', winHeight + 'px');
	}

	public navOpen:boolean = false;

	onToggleNav(event) {
		console.log('toggle nav', event);
	}

	public toggle() {
		console.log('toggle from navControl');
	}

}
