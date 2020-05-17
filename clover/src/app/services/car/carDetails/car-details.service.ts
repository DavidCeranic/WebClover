import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Car } from 'src/app/entities/Car/car';

@Injectable({
  providedIn: 'root'
})
export class CarDetailsService {

  private messageSource = new BehaviorSubject<Car>(null);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: Car){
    this.messageSource.next(message);
  }
}
