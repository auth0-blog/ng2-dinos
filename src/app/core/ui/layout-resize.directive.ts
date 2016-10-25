import { Directive, OnInit, ElementRef, Renderer } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Directive({
  selector: '[layout-resize]'
})
export class LayoutResizeDirective {
	private initWinHeight:number = 0;
	public navOpen:boolean = false;

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
		this.renderer.setElementStyle(this.el.nativeElement, 'min-height', winHeight + 'px');
	}

}
