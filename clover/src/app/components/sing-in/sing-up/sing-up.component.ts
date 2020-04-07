import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  singUpForm: FormGroup;

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

  onSubmit() {
    console.log(this.singUpForm.value);
    console.log(this.singUpForm);
  }

  onClear() {
    this.singUpForm.reset();
  }

}
