import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  navOpen: boolean;
  minHeight: string;
  private initWinHeight: number = 0;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart && this.navOpen) {
        this.navOpen = false;
      }
    });

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
    let winHeight = e ? e.target.innerHeight : this.initWinHeight;
    this.minHeight = winHeight + 'px';
  }
}
