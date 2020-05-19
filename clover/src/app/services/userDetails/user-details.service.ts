import { Injectable } from '@angular/core';
import { User } from 'src/app/entities/User/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  formData: User;
  readonly rootUrl= 'http://localhost:5000/api/';
  list: User[];

  private messageSource = new BehaviorSubject<string[]>(null);
  currentMessage = this.messageSource.asObservable();
  

  constructor(private http:HttpClient) { }

  postUserDetails(formData: User){
    return this.http.post(this.rootUrl + 'UserDetails', formData);
  }

  refreshList(){
    this.http.get(this.rootUrl + 'UserDetails').toPromise().then(res => this.list = res as User[]);
  }

  changeMessage(message: string[]){
    this.messageSource.next(message);
  }
}
