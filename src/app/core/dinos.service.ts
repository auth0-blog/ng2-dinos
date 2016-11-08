import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Dino } from './models/dino.model';
import { DinoDetail } from './models/dino-detail.model';

@Injectable()
export class DinosService {
  private baseUrl = 'http://localhost:3001/api/';

  constructor(private http: Http) { }

  getAllDinos$(): Observable<Dino[]> {
    return this.http
      .get(`${this.baseUrl}dinosaurs`)
      .map(this.handleSuccess)
      .catch(this.handleError);
  }

  getDino$(id: number): Observable<DinoDetail> {
    return this.http
      .get(`${this.baseUrl}dinosaur/${id}`)
      .map(this.handleSuccess)
      .catch(this.handleError);
  }

  private handleSuccess(res: Response) {
    return res.json();
  }

  private handleError(err: Response | any) {
    let errorMsg = err.message || 'Unable to retrieve data';
    return Observable.throw(errorMsg);
  }

}
