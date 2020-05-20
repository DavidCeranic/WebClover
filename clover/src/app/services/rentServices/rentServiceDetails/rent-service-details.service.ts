import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { RentService } from 'src/app/entities/rentService/rent-service';

@Injectable({
  providedIn: 'root'
})
export class RentServiceDetailsService {

  private messageSource = new BehaviorSubject<RentService>(null);
  currentMessage = this.messageSource.asObservable();

  formData: RentService;
  readonly rootUrl= 'http://localhost:5000/api/';
  list: RentService[];

  constructor(private http:HttpClient) { }

  changeMessage(message: RentService){
    this.messageSource.next(message);
  }
  
  postUserDetails(formData: RentService){
    return this.http.post(this.rootUrl + 'RentServices', formData);
  }

  refreshList(){
    this.http.get(this.rootUrl + 'RentServices').toPromise().then(res => this.list = res as RentService[]);
  }
}
