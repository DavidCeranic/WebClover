import { Component, OnInit } from '@angular/core';
import { FlightInfo } from 'src/app/entities/flightInfo/flight-info';
import { Params, ActivatedRoute } from '@angular/router';
import { AllFligtsDetailsService } from 'src/app/services/allFligts/all-flights-details/all-flights-details.service';
import { Seat } from 'src/app/entities/Seat/seat';
import { SeatService } from 'src/app/services/seat.service';

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
  constructor(public route: ActivatedRoute,public flightService :AllFligtsDetailsService,public seatService:  SeatService) { }

  id:number;
  flightData:FlightInfo;

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

    
   




  }

}
