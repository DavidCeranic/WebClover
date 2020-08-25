import { Injectable } from '@angular/core';
import { Seat } from '../entities/Seat/seat';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeatService {
  readonly rootUrl= 'http://localhost:5000/api/';

  constructor(private http:HttpClient) { }

  addSeat(seat: Seat): Promise<Seat>{
    return this.http.post<Seat>(this.rootUrl + 'Seats', seat).toPromise();    
  }
}
