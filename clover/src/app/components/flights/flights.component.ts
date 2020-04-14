import { Component, OnInit } from '@angular/core';
import {AllFlightsService} from 'src/app/services/allFligts/all-flights.service';
import {FlightInfo} from 'src/app/entities/flightInfo/flight-info';
@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})

export class FlightsComponent implements OnInit {
  allFlightss:Array<FlightInfo>;
  constructor(private flightService: AllFlightsService){
    this.allFlightss=this.flightService.getFlights();
  }

  ngOnInit(): void {
    //$('.datepicker').pickadate();
  }

}

