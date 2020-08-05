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
    // registerUser.loggedIn.subscribe(this.Click);
    this.user = null;
    this.user = this.registerUser.user;
  }

  message: string[];

  ngOnInit(): void {
    this.service.refreshList();
    this.service.currentMessage.subscribe(message => this.message = message);
    this.user = this.registerUser.user;
  }

  // Click(user: User){
    
  //   console.log("Pretisnuto");
  //   console.log(user);

  // }

  

}
