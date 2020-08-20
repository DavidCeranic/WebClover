import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/services/userDetails/user-details.service';
import { User } from 'src/app/entities/User/user';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { RegisterUserService } from 'src/app/services/userDetails/registerUser/register-user.service';
import { SingUpComponent } from '../sing-in/sing-up/sing-up.component';
import { MatDialog } from '@angular/material/dialog';
import { SingUpRentAdminComponent } from './sing-up-rent-admin/sing-up-rent-admin/sing-up-rent-admin.component';
import { SingUpFlightAdminComponent } from './sing-up-flight-admin/sing-up-flight-admin/sing-up-flight-admin.component';

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
    this.dialog.open(SingUpRentAdminComponent, {
      height: '520px',
      width: '500px',
    });
    //poslati string RentAdmin i u singUp postaviti to kao vrednost
  }

  onAddFlightService(){
    this.dialog.open(SingUpFlightAdminComponent, {
      height: '520px',
      width: '500px',
    });
  }

}
