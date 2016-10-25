import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Dino } from './models/dino';
import { DinoDetail } from './models/dino-detail';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DinosService {
	private baseUrl = 'http://localhost:3001/api/';

  constructor(private http: Http) { }

	getAllDinos(): Observable<Dino[]> {
		return this.http
			.get(`${this.baseUrl}dinosaurs`)
			.map(this.handleSuccess)
			.catch(this.handleError);
	}

	getDino(id: number): Observable<DinoDetail> {
		return this.http.get(`${this.baseUrl}dinosaur/${id}`)
			.map(this.handleSuccess)
			.catch(this.handleError);
	}

	handleSuccess(res:Response) {
		return res.json();
	}

	handleError(err) {
		let errorMsg = err.message || 'There was a problem getting dinosaur data from the API.';
		return Observable.throw(errorMsg);
	}
}
