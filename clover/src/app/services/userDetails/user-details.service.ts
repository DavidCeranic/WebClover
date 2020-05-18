import { Injectable } from '@angular/core';
import { User } from 'src/app/entities/User/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  formData: User;
  readonly rootUrl= 'http://localhost:5000/api/';

  constructor(private http:HttpClient) { }

  postUserDetails(formData: User){
    return this.http.post(this.rootUrl + 'UserDetails', formData);
  }
}
