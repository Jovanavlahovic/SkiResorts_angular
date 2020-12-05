import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Reservation } from '../skiresorts/model/reservation.model';
import { SkiPass } from '../skiresorts/model/ski-pass.model';
import { SkiResort } from '../skiresorts/model/ski-resort.model';
import { Tracks } from '../skiresorts/model/tracks.model';
import { Weather } from '../skiresorts/model/weather.model';

const baseUrl = 'http://localhost:3000/api/skiresorts';

@Injectable({
  providedIn: 'root',
})
export class SkiService {
  constructor(private http: HttpClient) {}

  getResorts(): Observable<SkiResort[]> {
    return this.http.get(baseUrl).pipe(map((x: any) => x as Array<SkiResort>));
  }

  getResort(id: number): Observable<SkiResort> {
    return this.http.get(`${baseUrl}/${id}`).pipe(map((x) => new SkiResort(x)));
  }

  getTracks(id: number, params): Observable<Tracks[]> {
    let queryParams = {
      params: new HttpParams().set('sort', params.sort || ''),
    };
    return this.http
      .get(`${baseUrl}/${id}/tracks`, queryParams)
      .pipe(map((x: any) => x as Array<Tracks>));
  }

  getWeather(id: number): Observable<Weather[]>{
    return this.http.get(`${baseUrl}/${id}/weather`).pipe(map(x => x as Array<Weather>));
  }

  getSkiPass(id:number): Observable<SkiPass[]>{
    return this.http.get(`${baseUrl}/${id}/skipass`).pipe(map(x => x as Array<SkiPass>))
  }

  createReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post(`${baseUrl}/${reservation._id}/skipass`, reservation).pipe(map(x => new Reservation(x)));
  }
}
