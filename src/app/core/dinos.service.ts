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

	private handleSuccess(res:Response) {
		if (typeof res == 'object') {
			return res.json();
		} else {
			this.handleError({message: 'Retrieved data is not typeof object'});
		}
	}

	private handleError(err) {
		let errorMsg = err.message || 'Unable to retrieve data';
		return Observable.throw('API ERROR:', errorMsg);
	}
}
