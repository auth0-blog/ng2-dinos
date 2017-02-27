import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';

import { DinosService } from '../../core/dinos.service';
import { DinoDetail } from '../../core/models/dino-detail.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  dino: DinoDetail;
  error: boolean;
  loading: boolean;

  constructor(
    private titleService: Title,
    private dinosService: DinosService,
    private route: ActivatedRoute) { }

  getDino() {
    this.route.params.forEach((params: Params) => {
      const id = +params['id'];	// convert string to number

      this.dinosService.getDino$(id)
        .subscribe(
          res => {
            this.dino = res;
            this.titleService.setTitle(this.dino.name);
            this.loading = false;
          },
          err => {
            this.error = true;
            this.loading = false;
          }
        );
    });
  }

  ngOnInit() {
    this.loading = true;
    this.getDino();
  }

  get isLoaded() {
    return this.loading === false;
  }

}
