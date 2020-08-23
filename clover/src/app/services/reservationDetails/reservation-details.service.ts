import { Injectable, EventEmitter, Output } from '@angular/core';
import { Reservation } from 'src/app/entities/reservation/reservation';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Car } from 'src/app/entities/Car/car';
import { User } from 'src/app/entities/User/user';

@Injectable({
  providedIn: 'root'
})
export class ReservationDetailsService {
  formData: Reservation;
  readonly rootUrl= 'http://localhost:5000/api/';
  list: Reservation[];

  private messageSource = new BehaviorSubject<Reservation>(null);
  currentMessage = this.messageSource.asObservable();

  @Output() messageEvent = new EventEmitter<Reservation[]>();

  constructor(private http:HttpClient) { }
  

  postReservation(formData: Reservation){
    return this.http.post(this.rootUrl + 'ReservationDetails/CreateReservationForCar', formData);
  }

  refreshList(){
    this.http.get(this.rootUrl + 'ReservationDetails').toPromise().then(res => {
      this.list = res as Reservation[];
      this.messageEvent.emit(this.list);
    });
  }

  putReservation(formData: Reservation, reservationId:string, rentServiceId: string){
    var rentService = parseInt(rentServiceId);
    //formData.reservationId = reservationId;
    return this.http.put(this.rootUrl + 'ReservationDetails/'+rentService, formData);
  }

  deleteReservation(carId: number){
    return this.http.delete(this.rootUrl + 'ReservationDetails/'+carId);
  }
  
}
