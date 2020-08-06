import { Injectable, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/entities/User/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  user: User;
  http: HttpClient;
  @Output() loggedIn = new EventEmitter<User>();

  constructor(http: HttpClient) { 
    this.http = http;
  }

  logIn(email: string, password: string){
    this.http.post<User>("http://localhost:5000/api/UserDetails/Login", { email, password }).toPromise().then(res => {
      localStorage.setItem("user_token", res.StringToken);
      this.user = res as User;
      this.loggedIn.emit(this.user);
    },
      err => {
        if (err.status === 400) {
          alert(err.error.message);
        }
      });
  }
}
