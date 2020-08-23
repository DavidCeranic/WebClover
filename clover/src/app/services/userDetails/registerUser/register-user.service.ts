import { Injectable, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/entities/User/user';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {
  formData: User;
  readonly rootUrl= 'http://localhost:5000/api/';
  list: User[];
  user: User;
  http: HttpClient;
  @Output() loggedIn = new EventEmitter<User>();

  constructor(http: HttpClient, private toastr: ToastrService) { 
    this.http = http;
  }
  refreshList(){
  return  this.http.get(this.rootUrl + 'UserDetails').toPromise().then(res => this.list = res as User[]);
  }

  logIn(email: string, password: string) : Promise<User>{
    return this.http.post<User>("http://localhost:5000/api/UserDetails/Login", { email, password }).toPromise();//.then((res : any) => {
    //   localStorage.setItem("user_token", res.StringToken);
    //   localStorage.setItem("regUser", res.UserId);
    //   localStorage.setItem("userEmail", res.Email);
    //   this.user = res as User;
    //   //TO DO
    //   console.log(this.user);
    //   console.log(this.user.userId);
    //   this.loggedIn.emit(this.user);
    // },
    //   err => {
    //     if (err.status === 400) {
    //       alert(err.error.message);
    //     }
    //   });

  
  }
}
