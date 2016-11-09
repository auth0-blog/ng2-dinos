import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { DinosService } from '../../core/dinos.service';
import { Dino } from '../../core/models/dino.model';
import { FilterService } from '../../core/filter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DinosService, FilterService]
})
export class HomeComponent implements OnInit {
  dinos: Dino[];
  filteredDinos: Dino[];
  error: boolean;
  loading: boolean;
  pageName: string = 'Dinosaurs';
  query: string = '';

  constructor(
    private titleService: Title,
    private dinosService: DinosService,
    private filterService: FilterService) { }

  getDinos() {
    this.dinosService.getAllDinos$()
      .subscribe(
        res => {
          this.dinos = res;
          this.filteredDinos = res;
        },
        err => {
          this.error = true;
        },
        () => {
          this.loading = false;
        }
      );
  }

  ngOnInit() {
    this.titleService.setTitle(this.pageName);
    this.loading = true;
    this.getDinos();
  }

  filterDinos(query: string) {
    this.filteredDinos = this.filterService.search(this.dinos, this.query);
  }

  resetQuery() {
    this.query = '';
    this.filteredDinos = this.dinos;
  }

  get isLoaded() {
    return this.loading === false;
  }

  get noSearchResults() {
    return this.dinos && !this.filteredDinos.length && this.query && !this.error;
  }

}
