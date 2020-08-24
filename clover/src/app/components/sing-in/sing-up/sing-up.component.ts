import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { User } from 'src/app/entities/User/user';
import { SingInComponent } from '../sing-in.component';
import { UserDetailsService } from 'src/app/services/userDetails/user-details.service';
import { ToastrService } from 'ngx-toastr';
import { RegisterUserService } from 'src/app/services/userDetails/registerUser/register-user.service';
import { Router } from '@angular/router';

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

  constructor(public service: UserDetailsService, private toastr: ToastrService, private registerService: RegisterUserService, public router: Router) { }

  ngOnInit(): void {
    this.resetForm();
  }


  navigateTo(section: string){
    window.location.hash='';
    window.location.hash = section;
  }

  onSubmit(form: NgForm){
    //proveriti da li je dosla neka vrednost(RentAdmin, FlightAdmin) pa onda staviti user ili nesto od ta dva
    form.value.UserType="User";
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
    );
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
        name: "",
        email: "",
        password: "",
        city: "",
        phoneNumber: "",
        UserType: "",
        StringToken: "",
        userFriends:null
      }
  }

  valueChange(secEmail: string){
  }
}
