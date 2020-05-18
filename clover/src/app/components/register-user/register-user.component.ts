import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/services/userDetails/user-details.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(public service: UserDetailsService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

}
