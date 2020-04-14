import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/entities/User/user';
import { SingInComponent } from '../sing-in.component';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  singUpForm: FormGroup;
  registerUser = new Array<User>();
  message: string = "SingIn";

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.singUpForm = new FormGroup({
      'FirstName' : new FormControl('', Validators.required),
      'LastName': new FormControl('', [Validators.required, Validators.maxLength(100)]),
      'Email': new FormControl(''),
      'Password': new FormControl(''),
      'City': new FormControl(''),
      'PhoneNumber': new FormControl('')
    });
  }

  navigateTo(section: string){
    window.location.hash='';
    window.location.hash = section;
  }

  onSubmit(): void {
    const user = new User(this.getValue("FirstName"),this.getValue("LastName"),this.getValue("Email"),
                 this.getValue("Password"),this.getValue("City"), this.getValue("PhoneNumber"));
    this.registerUser.push(user);
  }

  sendMessage(){
    this.messageEvent.emit(this.message);
  }

  onClear() {
    this.singUpForm.reset();
  }

  getValue(Id: string) {
    return (<HTMLInputElement> document.getElementById(Id)).value;
  }

}
