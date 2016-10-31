import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  navOpen: boolean;
  minHeight: string;
  private initWinHeight: number = 0;

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
    let winHeight: number = e ? e.target.innerHeight : this.initWinHeight;
    this.minHeight = `${winHeight}px`;
  }
}
