import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/services/userDetails/user-details.service';
import { User } from 'src/app/entities/User/user';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { RegisterUserService } from 'src/app/services/userDetails/registerUser/register-user.service';
import { SingUpComponent } from '../sing-in/sing-up/sing-up.component';
import { MatDialog } from '@angular/material/dialog';
import { SingUpRentAdminComponent } from './sing-up-rent-admin/sing-up-rent-admin/sing-up-rent-admin.component';
import { SingUpFlightAdminComponent } from './sing-up-flight-admin/sing-up-flight-admin/sing-up-flight-admin.component';
import { Friends } from 'src/app/entities/Friends/friends';
import { HttpClient } from '@angular/common/http';
import { FriendsService } from 'src/app/services/friends.service';
import { FlightReservationService } from 'src/app/services/flightReservation/flight-reservation.service';
import { FlightReservation } from 'src/app/entities/FlightReservation/flight-reservation';
import { Car } from 'src/app/entities/Car/car';
import { ReservationDetailsService } from 'src/app/services/reservationDetails/reservation-details.service';
import { Reservation } from 'src/app/entities/reservation/reservation';
import { SeatService } from 'src/app/services/seat.service';
import { Seat } from 'src/app/entities/Seat/seat';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  user: User;
  Id:string;
  cc:string;
  fri:Friends;
  parseJwt: string;
  clicked1:boolean=false;
  clicked2:boolean=false;
  clicked3:boolean=false;
  clicked4:boolean=false;
  clicked5:boolean=false;
  searchFriend:string;
  pomSeat:Seat;

  userName:string;
  allRegistredUsers = new Array<User>();
  allRegistredUsers2 = new Array<User>();

  allFriends = new Array<Friends>();
  allFriendsReq = new Array<Friends>();
  pom1 = new Array<Friends>();
  pom2 = new Array<Friends>();
  allReservation= new Array<FlightReservation>();
  allReservation2= new Array<FlightReservation>();
  allReservationCars= new Array<Reservation>();
  filtredReservationCars= new Array<Reservation>();
  korisnikID:string;

  acceptedFriends = new Array<Friends>();
  list: User[];
  constructor(public service: UserDetailsService, private registerUser: RegisterUserService, public dialog: MatDialog,private friendService: FriendsService,public reservationService:FlightReservationService, public reservationServiceCar: ReservationDetailsService,public seatService: SeatService) {
    this.user = null;
  }

  message: string[];

  ngOnInit(): void {

    this.friendService.getAllFriends().then(res=>{
      this.allFriends=res;
        });

    
    this.service.currentMessage.subscribe(message => this.message = message);
    this.registerUser.loggedIn.subscribe(res=>{
      this.user=res;

      
    });

   


  }

  check(){
    const userRole = JSON.parse(localStorage.getItem('role'));
      if (userRole === 'Admin') {
        return false;
      }
      
      return true;
  }

  ispisRezervacija(){
    if(!this.clicked4){
    this.Id= JSON.parse(localStorage.getItem("regId"));
    this.reservationService.getAllReservation().then(res=>{
      this.allReservation2=res;
      this.allReservation2.forEach(element => {
        if(element.reservedUser.userId==this.Id){
          this.allReservation.push(element);
          this.clicked4=true;
        }
        
      });
    })
  }
  }

  ispisRezervacijaCars(){
    if(!this.clicked5){
    this.Id= JSON.parse(localStorage.getItem("regId"));
    this.reservationServiceCar.getAllReservation().then(res=>{
      this.allReservationCars = res;
      this.allReservationCars.forEach(element => {
        if(element.user.userId == this.Id){
          this.filtredReservationCars.push(element);
         this.clicked5=true;
        }
      });
    })
  }
  }
seeAllUsers(){
  if(!this.clicked3){
  this.Id= JSON.parse(localStorage.getItem("regId"));
  this.service.refreshList().then(res => {
    this.allRegistredUsers2 = res;
    this.allRegistredUsers2.forEach(element => {
      if(element.userId!=this.Id){
        this.allRegistredUsers.push(element);
        this.clicked3=true;
      }
    });
  });
}
}
cancleFlight(rUser:FlightReservation){

//prvo moram da preuzmem sediste;
//
this.seatService.getSeatById(rUser.reservedSeat.id).toPromise().then(
  dataV => {
    this.pomSeat = dataV;
  }
)
this.pomSeat.taken=false;
this.seatService.putSeat(this.pomSeat)
this.reservationService.deleteFlightReservation(rUser.reservationID);
//ovde treba promeniti bool zauzeto;
}

deleteResercation(reservation: Reservation){
  this.reservationServiceCar.deleteReservation(reservation.reservationId);
}

  onAddRentService(){
    this.dialog.open(SingUpRentAdminComponent, {
      height: '520px',
      width: '500px',
    });
  }
  ispisZahteva(){

    if(!this.clicked1){
    this.allFriends.forEach(element => {
      if(element.userEmail2==localStorage.getItem("regEmail")&&element.accepted==false){
        this.allFriendsReq.push(element);
        this.clicked1=true;
      }
    });
  }
  }
  ignoreFfriend(friend:Friends){
    friend.added=false;
    this.friendService.putFriends(friend);
  }
  deleteFriend(friend:Friends){
    friend.added=false;
    friend.accepted=false;
    this.friendService.putFriends(friend);
  }
  ispisPrijatelja(){
    if(!this.clicked2){
    this.allFriends.forEach(element => {
      if(element.userEmail1==localStorage.getItem("regEmail") &&element.accepted==true){
        this.acceptedFriends.push(element);
        this.clicked2=true;
      }
      if(element.userEmail2==localStorage.getItem("regEmail") &&element.accepted==true){
        this.pom1.push(element);
        this.clicked2=true;
      }

    });
  }
  }
  acceptFrind(friend:Friends){
    friend.accepted=true;
    this.friendService.putFriends(friend);

  }

 
  onAddFlightService(){
    this.dialog.open(SingUpFlightAdminComponent, {
      height: '520px',
      width: '500px',
    });
  }
  addFriend(rUser:User){
   this.Id= rUser.userId;
   //this.fri.userEmail1=this.Id;
   let friend = new Friends();
   friend.userEmail2 = rUser.email;
   friend.userEmail1=localStorage.getItem("regEmail");
   friend.added = true;
   // pozoves servis da stavisu u bazu
   this.friendService.addFriends(friend);
   // povezi oba korisnika sa tim prijateljem na serveru DONE
  }
}
