import { Component, OnInit } from '@angular/core';
import { FlightInfo } from 'src/app/entities/flightInfo/flight-info';
import { Params, ActivatedRoute } from '@angular/router';
import { AllFligtsDetailsService } from 'src/app/services/allFligts/all-flights-details/all-flights-details.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(public route: ActivatedRoute,public flightService :AllFligtsDetailsService) { }

  id:number;
  flightData:FlightInfo;


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
          }
        )
      }
    )
  }

}
