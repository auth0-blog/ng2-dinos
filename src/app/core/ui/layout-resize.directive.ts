import { Directive, OnInit, ElementRef, Renderer } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Directive({
  selector: '[appLayoutResize]'
})
export class LayoutResizeDirective implements OnInit {
  navOpen: boolean = false;
  private initWinHeight: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    Observable.fromEvent(window, 'resize')
      .debounceTime(200)
      .subscribe((event) => {
        this.resizeFn(event);
      });

    this.initWinHeight = window.innerHeight;
    this.resizeFn(null);
  }

  private resizeFn(e) {
    let winHeight = e ? e.target.innerHeight : this.initWinHeight;
    this.renderer.setElementStyle(this.el.nativeElement, 'min-height', winHeight + 'px');
  }

}
