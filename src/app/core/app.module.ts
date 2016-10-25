import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './ui/app.component';
import { LayoutResizeDirective } from './ui/layout-resize.directive';

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { DinoCardComponent } from '../dino-card/dino-card.component';
import { DinosService } from './dinos.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutResizeDirective,
    AboutComponent,
    HomeComponent,
		DinoCardComponent
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
