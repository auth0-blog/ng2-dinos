import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DinosService } from '../../core/dinos.service';
import { Dino } from '../../core/models/dino';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	dinos: Dino[] = [];
	pageName: string = 'All Dinosaurs';
	error: boolean;
	query: string = '';
	loading: boolean;

  constructor(private titleService: Title, private dinosService: DinosService) { }

  ngOnInit() {
		this.titleService.setTitle(this.pageName);

		this.loading = true;

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

	resetQuery() {
		this.query = '';
	}

}
