import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SingUpComponent } from './sing-up/sing-up.component';
import {AllFlightsService} from 'src/app/services/allFligts/all-flights.service';
import {FlightInfo} from 'src/app/entities/flightInfo/flight-info';
@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {
  allFlightss:Array<FlightInfo>;
  singInForm: FormGroup;
  @ViewChild(SingUpComponent) sing_up: SingUpComponent;

  constructor(private flightService: AllFlightsService)
   {  this.allFlightss=this.flightService.getFlights();}
  displayStr = "SingIn";

  ngOnInit(): void 
  {
      this.initForm();
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
      alert("Sve okej Gari");
      this.initForm();
     
    }
      alert("Morate se prvo registrovati");
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
}
