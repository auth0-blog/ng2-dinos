import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Dino } from './dino';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DinosService {
	private baseUrl = 'http://localhost:3001/api/';

  constructor(private http: Http) { }

	getAllDinos(): Observable<Dino[]> {
		return this.http
			.get(`${this.baseUrl}dinosaurs`)
			.map((res:Response) => res.json());
	}

	getDino(id:String): Observable<Dino> {
		return this.http.get(`${this.baseUrl}dinosaur/${id}`)
			.map(res => res.json());
	}

}
