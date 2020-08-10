import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/services/userDetails/user-details.service';
import { User } from 'src/app/entities/User/user';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { RegisterUserService } from 'src/app/services/userDetails/registerUser/register-user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user: User;
  parseJwt: string;

  constructor(public service: UserDetailsService, private registerUser: RegisterUserService) {
    this.user = null;
  }

  message: string[];

  ngOnInit(): void {
    this.service.refreshList();
    this.service.currentMessage.subscribe(message => this.message = message);
    this.registerUser.loggedIn.subscribe(res=>{
      this.user=res;
    });
  }

  check(){
    const userRole = JSON.parse(localStorage.getItem('sessionUserRolee'));
      if (userRole === 'ADMIN') {
        return false;
      }
      
      return true;
  }

  onAddRentService(){

  }

  onAddFlightService(){

  }

  

}
