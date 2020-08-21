import { Injectable, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/entities/User/user';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  user: User;
  http: HttpClient;
  @Output() loggedIn = new EventEmitter<User>();

  constructor(http: HttpClient, private toastr: ToastrService) { 
    this.http = http;
  }

  logIn(email: string, password: string): Promise<User>{
     return this.http.post<User>("http://localhost:5000/api/UserDetails/Login", { email, password }).toPromise();
  }
}
