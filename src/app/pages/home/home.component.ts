import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { DinosService } from '../../core/dinos.service';
import { Dino } from '../../core/models/dino.model';
import { FilterService } from '../../core/filter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dinos: Dino[];
  filteredDinos: Dino[];
  pageName: string = 'Dinosaurs';
  error: boolean;
  query: string = '';
  loading: boolean;

  constructor(
    private titleService: Title,
    private dinosService: DinosService,
    private filterService: FilterService) { }

  getAllDinos() {
    this.dinosService
      .getAllDinos()
      .subscribe(
        res => {
          this.dinos = res;
          this.filteredDinos = res;
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

  filterDinos(query: string) {
    this.filteredDinos = this.filterService.search(this.dinos, this.query);
  }

  get isLoaded() {
    return this.loading === false;
  }

}
