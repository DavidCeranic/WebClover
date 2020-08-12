import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/services/userDetails/user-details.service';
import { User } from 'src/app/entities/User/user';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { RegisterUserService } from 'src/app/services/userDetails/registerUser/register-user.service';
import { MatDialog } from '@angular/material/dialog';
import { SingUpComponent } from '../sing-in/sing-up/sing-up.component';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user: User;
  parseJwt: string;

  constructor(public service: UserDetailsService, private registerUser: RegisterUserService, public dialog: MatDialog) {
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
    this.dialog.open(SingUpComponent, {
      height: '520px',
      width: '500px',
    });
  }

  onAddFlightService(){
    this.dialog.open(SingUpComponent, {
      height: '520px',
      width: '500px',
    });
  }

  

}
