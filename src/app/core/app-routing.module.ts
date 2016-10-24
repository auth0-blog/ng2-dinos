import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent }  from '../home/home.component';
import { AboutComponent } from '../about/about.component';

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
			}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}