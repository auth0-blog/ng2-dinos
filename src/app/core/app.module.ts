import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { FilterPipe } from './filter.pipe';
import { DinosService } from './dinos.service';

import { AppComponent } from './ui/app.component';
import { LayoutResizeDirective } from './ui/layout-resize.directive';
import { LoadingComponent } from './ui/loading.component';

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AboutComponent } from '../pages/about/about.component';
import { HomeComponent } from '../pages/home/home.component';
import { Error404Component } from '../pages/error404/error404.component';
import { DetailComponent } from '../pages/detail/detail.component';
import { DinoCardComponent } from '../pages/home/dino-card/dino-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutResizeDirective,
		LoadingComponent,
    AboutComponent,
    HomeComponent,
		DetailComponent,
		Error404Component,
		DinoCardComponent,
		FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
		AppRoutingModule
  ],
  providers: [
	  Title,
		DinosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
