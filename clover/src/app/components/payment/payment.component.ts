import { Component, OnInit } from '@angular/core';
import { FlightInfo } from 'src/app/entities/flightInfo/flight-info';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { AllFligtsDetailsService } from 'src/app/services/allFligts/all-flights-details/all-flights-details.service';
import { Seat } from 'src/app/entities/Seat/seat';
import { SeatService } from 'src/app/services/seat.service';
import { UserDetailsService } from 'src/app/services/userDetails/user-details.service';
import { User } from 'src/app/entities/User/user';
import { FlightReservation } from 'src/app/entities/FlightReservation/flight-reservation';
import { FlightReservationService } from 'src/app/services/flightReservation/flight-reservation.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  brs:number;
  i:number;
  bbb:number;
  sediste:Seat;
  cena:number;
  constructor(public route: ActivatedRoute,public flightService :AllFligtsDetailsService,public seatService:  SeatService, public userService: UserDetailsService,public reservationServation :FlightReservationService, public router: Router) { }
  allSeats = new Array<Seat>();
  sortedSeats = new Array<Seat>();
  id:number;
  flightData:FlightInfo;
  seatId:number;
  seatPrice:number;
  s:Seat;
  f:FlightInfo;
  u:User;
  ui:number;
  res:FlightReservation=new FlightReservation;

  dalijeadmin():boolean{

    const userRole = JSON.parse(localStorage.getItem('role'));
    if (userRole === 'Admin' || userRole === "FlightAdmin"|| userRole==="User") {
      return true;
    }else{
  
      return false;
    }
  
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['flightID'];
        console.log(this.id);
        //this.data.refreshList();
        this.flightService.getFlightById(this.id).toPromise().then(
          dataV => {
          this.flightData = dataV;
          // console.log(this.flightData);
          // this.brs=this.flightData.seatsNumber;

          // for(let bi=0;bi<this.brs;bi++){
          //   let sediste2:Seat;
          //   let sediste3=new Seat(0,"economy",0,0,false,0);
          //   sediste3.number2=Number.parseInt(bi.toString());
          //   sediste3.price=Number.parseInt(this.flightData.price.toString());
          //   sediste3.taken=false;
          //   sediste3.id = 0;
          //   sediste3.flightInfo2Id=Number.parseInt(this.id.toString());
            
          //  this.seatService.addSeat(sediste3).then(res=>
            // {
            //   console.log("AAAA");
            // });
       
       
       
       
        //  }
          
          }
        )
      }
    )

    
   
    this.seatService.getAllSeats().then(
      data=>{
        data.forEach(element => {
          if(element.flightInfo2Id==this.id){
            this.allSeats.push(element);
          }
        });

        
      }

    )
  // this.allSeats.sort();
    this.sortedSeats = this.allSeats.sort((n1, n2) => {
      if (n1.number2 > n2.number2)
        return 1;

      if (n1.number2 < n2.number2)
        return -1;

        return 0;
    })


  }



  reserve(seat:Seat){
    this.seatId =seat.id;
    this.seatPrice=seat.price;
  }


  finalPay(){
    
   this.seatService.getSeatById(this.seatId).toPromise().then(
    dataV=> {
      this.s=dataV;
     }
   )
   this.ui=JSON.parse(localStorage.getItem("regId"));
   this.userService.getUserById(this.ui).toPromise().then(
    dataV=> {
      this.u=dataV;
     }
   )


    this.flightService.getFlightById(this.seatId).toPromise().then(
      dataV=> {
        this.f=dataV;
       }
     )


     this.res.reservedSeat=this.s;
     this.res.reservedFlight=this.f;
     this.res.reservedUser=this.u;

    this.reservationServation.addReservation(this.res);
  }

  rentCar(){
    this.router.navigateByUrl('flights/payment/'+ this.id + '/fast-rent-car');
  }

}
