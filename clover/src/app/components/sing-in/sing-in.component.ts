import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  singInForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  becomeAUser(): void {
    localStorage.setItem('sessionUserRole', JSON.stringify('USER'));
  }

  private initForm() {
    this.singInForm = new FormGroup({
      'Email': new FormControl('', Validators.required),
      'Password': new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
  }

  onSubmit() {
    console.log(this.singInForm.value);
    console.log(this.singInForm);
  }

  onClear() {
    this.singInForm.reset();
  }

}
