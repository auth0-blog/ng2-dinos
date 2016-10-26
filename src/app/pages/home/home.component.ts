import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { DinosService } from '../../core/dinos.service';
import { Dino } from '../../core/models/dino.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dinos: Dino[];
  pageName: string = 'All Dinosaurs';
  error: boolean;
  query: string = '';
  loading: boolean;

  constructor(private titleService: Title, private dinosService: DinosService) { }

  getAllDinos() {
    this.dinosService
      .getAllDinos()
      .subscribe(
        res => {
          this.dinos = res;
          this.loading = false;
        },
        err => {
          this.error = true;
          this.loading = false;
        }
      );
  }

  ngOnInit() {
    this.titleService.setTitle(this.pageName);
    this.loading = true;
    this.getAllDinos();
  }

  resetQuery() {
    this.query = '';
  }

  get isLoaded() {
    return this.loading === false;
  }

}
