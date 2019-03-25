import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private http: HttpClient) {}

  defaultStations(): Observable<any> {
    return this.http
      .get('http://www.radio-browser.info/webservice/json/stations/Ukraine');
  }

  searchStation(query: string): Observable<any> {
    return this.http
    .get(`http://www.radio-browser.info/webservice/json/stations/${query}`);
  }

}
