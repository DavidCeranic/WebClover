import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import {FlightInfo} from "src/app/entities/flightInfo/flight-info"
@Injectable({
  providedIn: 'root'
})
export class AllFligtsDetailsService {


  formData: FlightInfo;
  readonly rootUrl= 'http://localhost:5000/api/';
  list: FlightInfo[];

  private messageSource = new BehaviorSubject<FlightInfo>(null);
  currentMessage = this.messageSource.asObservable();

  constructor(private http:HttpClient) { }


  postFlightDetails(formData: FlightInfo){
    return this.http.post(this.rootUrl + 'FlightInfo2', formData);
  }

  refreshList(){
    this.http.get(this.rootUrl + 'FlightInfo2').toPromise().then(res => this.list = res as FlightInfo[]);
  }

  changeMessage(message: FlightInfo){
    this.messageSource.next(message);
  }
}