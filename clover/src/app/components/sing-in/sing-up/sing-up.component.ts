import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  singUpForm: FormGroup;
  registerUser: Array<User>;

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
      'Gener': new FormControl('')
    });
  }

  onSubmit(): void {
    const user = new User(this.getValue("FirstName"),this.getValue("LastName"),this.getValue("Email"),
                 this.getValue("Password"),this.getValue("Gener"));
    
    this.registerUser.push(user);
  }

  onClear() {
    this.singUpForm.reset();
  }

  getValue(Id: string) {
    return (<HTMLInputElement> document.getElementById(Id)).value;
  }

}
