import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { FilterPipe } from './filter.pipe';
import { DinosService } from './dinos.service';

import { AppComponent } from './ui/app.component';
import { LayoutResizeDirective } from './ui/layout-resize.directive';

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { DetailComponent } from '../detail/detail.component';
import { DinoCardComponent } from '../dino-card/dino-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutResizeDirective,
    AboutComponent,
    HomeComponent,
		DetailComponent,
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
