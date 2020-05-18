import { Injectable } from '@angular/core';
import {AboutCompany} from "src/app/entities/aboutCompany/about-company"
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class AvioCompanyDetailsService {
  private messageSource = new BehaviorSubject<AboutCompany>(null);
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: AboutCompany){
    this.messageSource.next(message);
  }
  constructor() { }
}
