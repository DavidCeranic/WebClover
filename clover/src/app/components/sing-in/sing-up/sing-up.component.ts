import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { User } from 'src/app/entities/User/user';
import { SingInComponent } from '../sing-in.component';
import { UserDetailsService } from 'src/app/services/userDetails/user-details.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(public service: UserDetailsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }


  navigateTo(section: string){
    window.location.hash='';
    window.location.hash = section;
  }

  onSubmit(form: NgForm){
    this.insertUser(form);
  }

  insertUser(form: NgForm){
    this.service.postUserDetails(form.value).subscribe(
      res => {
        this.toastr.success('User successfully added');
        this.resetForm(form);
      },
      err => {
        this.toastr.success('error');
      }
    )
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

  resetForm(form?: NgForm){
    if(form!=null)
      form.resetForm();
      this.service.formData = {
        userId: null,
        Name: "",
        email: "",
        password: "",
        city: "",
        phoneNumber: "",
        userType: "",
        StringToken: ""
      }
  }

  valueChange(secEmail: string){
  }
}
