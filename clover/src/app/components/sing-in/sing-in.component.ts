import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { SingUpComponent } from './sing-up/sing-up.component';
import {AllFlightsService} from 'src/app/services/allFligts/all-flights.service';
import {FlightInfo} from 'src/app/entities/flightInfo/flight-info';
import { UserDetailsService } from 'src/app/services/userDetails/user-details.service';
import { Router } from '@angular/router';
import { HttpBackend } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
import { User } from 'src/app/entities/User/user';
import { RegisterUserService } from 'src/app/services/userDetails/registerUser/register-user.service';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

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
  http: HttpClient;
  displayStr = "SingIn";
  user: User;

  constructor(private flightService: AllFlightsService, private registerService: RegisterUserService, public service: UserDetailsService, public router: Router, http: HttpClient,private authService: SocialAuthService)
   {
       this.allFlightss=this.flightService.getFlights();
       this.http = http;
      
  }
  
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

  onSubmit() {
    const email = this.getValue("Email");
    const password = this.getValue("Password");
    this.registerService.logIn(email, password);
    this.router.navigateByUrl('/register-user');
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
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(3)])
  });

  OnFacebook() : void{
    var user=this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(res=>{
      var user=new User(res.firstName,res.email,"","","","User",res.idToken);
      this.http.post<User>('http://localhost:5000/api/UserDetails/'+'SocialFB', user).toPromise().then((res: any) => {
        this.user=res as User;
        this.registerService.user = this.user;
        this.router.navigateByUrl('/register-user');
        });
    });
  }

  OnGoogle() : void{
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(res=>{
      var user=new User(res.firstName,res.email,"","","","User",res.idToken);
      this.http.post<User>('http://localhost:5000/api/UserDetails/'+'Social', user).toPromise().then((res: any) => {
        this.user=res as User;
        this.registerService.user = this.user;
        this.registerService.loggedIn.emit(res);
        this.router.navigateByUrl('/register-user');
        });
    });
    
  }
}

