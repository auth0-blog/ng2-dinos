import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DinosService } from '../core/dinos.service';
import { Dino } from '../core/dino';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
	dino: Dino;
	error: boolean;

  constructor(
		private titleService: Title, 
		private dinosService: DinosService, 
		private router: Router, 
		private route: ActivatedRoute) { }

  ngOnInit() {
		this.route.params.forEach((params: Params) => {
			let id = +params['id'];	// convert string to number

			this.dinosService
				.getDino(id)
				.subscribe(
					res => {
						this.dino = res;
						this.titleService.setTitle(res.name);
					},
					err => this.error = true
				);
		});
  }

}
