import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SingUpComponent } from './sing-up/sing-up.component';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  singInForm: FormGroup;
  @ViewChild(SingUpComponent) sing_up: SingUpComponent;

  constructor() { }

  ngOnInit(): void 
  {
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
    debugger
    if (this.sing_up.registerUser.filter(function(e) {return e.email === 'd';}).length>0) 
    {
    debugger

      alert("Sve okej Gari");
      this.initForm();
     
    }
      debugger
      alert("Morate se prvo registrovati");
  }

  onClear() {
    this.singInForm.reset();
  }

  getValue(Id: string) {
    return (<HTMLInputElement> document.getElementById(Id)).value;
  }
}
