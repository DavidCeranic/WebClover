import { Component, OnInit,Input } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FlightInfo } from 'src/app/entities/flightInfo/flight-info';
import { AllFligtsDetailsService } from 'src/app/services/allFligts/all-flights-details/all-flights-details.service';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {

  @Input() searchedFlights;
  constructor(public route: ActivatedRoute,public flightService :AllFligtsDetailsService,private router: Router) { }
  id:number;
  flightData:FlightInfo;
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['flightID'];
        console.log(this.id);
        //this.data.refreshList();
        // this.flightService.getFlightById(this.id).toPromise().then(
        //   dataV => {
        //   this.flightData = dataV;
        // //    console.log(this.rentService);
        //   }
        // )
      }
    )
  }

  onSelect(flightService:FlightInfo){
    this.router.navigateByUrl('/flights/payment/'+flightService.flightID);
    //this.data.changeMessage(service);
  }
}
