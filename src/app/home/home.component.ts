import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DinosService } from '../core/dinos.service';
import { Dino } from '../core/models/dino';

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

  constructor(private titleService: Title, private dinosService: DinosService) { }

  ngOnInit() {
		this.titleService.setTitle(this.pageName);

		this.dinosService
			.getAllDinos()
			.subscribe(
				res => this.dinos = res,
				err => this.error = true
			);
  }

	resetQuery() {
		this.query = '';
	}

}
