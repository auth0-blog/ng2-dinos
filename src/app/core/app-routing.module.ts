import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { AboutComponent } from '../pages/about/about.component';
import { DetailComponent } from '../pages/detail/detail.component';
import { Error404Component } from '../pages/error404/error404.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'dinosaur/:id',
        component: DetailComponent
      },
      {
        path: '**',
        component: Error404Component
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
