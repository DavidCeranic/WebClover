import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { SingUpComponent } from './sing-up/sing-up.component';
import {AllFlightsService} from 'src/app/services/allFligts/all-flights.service';
import {FlightInfo} from 'src/app/entities/flightInfo/flight-info';
import { UserDetailsService } from 'src/app/services/userDetails/user-details.service';
import { Router } from '@angular/router';
import { HttpBackend } from '@angular/common/http';
@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {
  [x: string]: any;
  allFlightss:Array<FlightInfo>;
  singInForm: FormGroup;
  @ViewChild(SingUpComponent) sing_up: SingUpComponent;

  constructor(private flightService: AllFlightsService, public service: UserDetailsService, public router: Router)
   {  this.allFlightss=this.flightService.getFlights();}
  displayStr = "SingIn";

  ngOnInit(): void 
  {
      this.service.refreshList();
  }

  navigateTo(section: string){
    window.location.hash='';
    window.location.hash = section;
  }

  reciveMessage($event){
    this.displayStr="SingIn";
  }

  becomeAUser(): void {
    localStorage.setItem('sessionUserRole', JSON.stringify('USER'));
  }

  becomeAAdmin(): void{
    localStorage.setItem('sessionUserRolee', JSON.stringify('ADMIN'));
  }

  onSubmit(form: NgForm) {
    for(let user of this.service.list)
    {
      if(user.name == this.getValue("Email")){
        if(user.password == this.getValue("Password")){
          this.SingInUser(this.getValue("Email"), this.getValue("Password"));
          this.router.navigateByUrl('/register-user');
        }
      }
    }
  }

  showRegister(){
    this.displayStr = "SingUp"
  }

  onClear() {
    this.singInForm.reset();
  }

  getValue(Id: string) {
    return (<HTMLInputElement> document.getElementById(Id)).value;
  }

  SingInUser(email: string, password: string){
    let back = new Array<string>();
    back.push(email);
    back.push(password);
    

    this.service.changeMessage(back);
  }

  loginGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]),
    password: new FormControl("", [Validators.required, Validators.minLength(3)])
  });
}
