import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { RentService } from 'src/app/entities/rentService/rent-service';

@Injectable({
  providedIn: 'root'
})
export class RentServiceDetailsService {

  private messageSource = new BehaviorSubject<RentService>(null);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: RentService){
    this.messageSource.next(message);
  }
}
