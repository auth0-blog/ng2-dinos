import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './core/app-routing.module';
import { AppComponent } from './core/app.component';
import { DinosService } from './core/dinos.service';
import { LoadingComponent } from './core/ui/loading.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { DetailComponent } from './pages/detail/detail.component';
import { DinoCardComponent } from './pages/home/dino-card/dino-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    AboutComponent,
    HomeComponent,
    DetailComponent,
    Error404Component,
    DinoCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    Title,
    DinosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
