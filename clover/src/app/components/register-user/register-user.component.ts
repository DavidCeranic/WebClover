import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/services/userDetails/user-details.service';
import { User } from 'src/app/entities/User/user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user: User;

  constructor(public service: UserDetailsService) {
  }

  message: string[];

  ngOnInit(): void {
    this.service.refreshList();
    this.service.currentMessage.subscribe(message => this.message = message);

    for(let SUser of this.service.list){
      if(SUser.email == this.message[0]){
        if(SUser.password == this.message[1]){
          this.user = SUser;
        }
      }
    }
  }

}
