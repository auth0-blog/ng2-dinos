import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { Dino } from './models/dino.model';
import { DinoDetail } from './models/dino-detail.model';

@Injectable()
export class DinosService {
  private baseUrl = 'http://localhost:3001/api/';

  constructor(private http: HttpClient) { }

  getAllDinos$(): Observable<Dino[]> {
    return this.http
      .get(`${this.baseUrl}dinosaurs`)
      .catch(this.handleError);
  }

  getDino$(id: number): Observable<DinoDetail> {
    return this.http
      .get(`${this.baseUrl}dinosaur/${id}`)
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse | any) {
    const errorMsg = err.message || 'Unable to retrieve data';
    return Observable.throw(errorMsg);
  }

}
