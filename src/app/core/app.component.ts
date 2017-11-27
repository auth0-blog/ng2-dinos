import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';

declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  navOpen: boolean;
  minHeight: string;
  private initWinHeight = 0;

  ngOnInit() {
    Observable.fromEvent(window, 'resize')
      .debounceTime(200)
      .subscribe((event) => {
        this.resizeFn(event);
      });

    this.initWinHeight = window.innerHeight;
    this.resizeFn(null);
  }

  navToggleHandler(e: boolean) {
    this.navOpen = e;
  }

  private resizeFn(e) {
    const winHeight: number = e ? e.target.innerHeight : this.initWinHeight;
    this.minHeight = `${winHeight}px`;
  }
}
