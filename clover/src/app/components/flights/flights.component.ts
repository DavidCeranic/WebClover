import { Component, OnInit } from '@angular/core';
import {AllFlightsService} from 'src/app/services/allFligts/all-flights.service';
import {FlightInfo} from 'src/app/entities/flightInfo/flight-info';
import {SearchFlightService} from 'src/app/services/searchFlight/search-flight.service';
import { AbstractFilterParam } from 'src/app/entities/abstract-filter-param/abstract-filter-param';
import { StringFilterParam } from 'src/app/entities/string-filter-param/string-filter-param';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})

export class FlightsComponent implements OnInit {

 

  allFlightss:Array<FlightInfo>;
  searchedFlights: Array<FlightInfo>

  constructor(private flightService: AllFlightsService, private router: Router, private route: ActivatedRoute){
    this.allFlightss=this.flightService.getFlights();
    this.searchedFlights=this.allFlightss;
  }

  ngOnInit(): void {
    //$('.datepicker').pickadate();
   
  }

  filterServices(): void {
    //this.filteredCars = new Array<Car>();
    let filterParams = new Array<AbstractFilterParam>();
    if (this.getFilterFieldValue("searchFromFilter")) {
      filterParams.push(this.addSearchFromFilterParam());
    }
    if (this.getFilterFieldValue("searchToFilter")) {
      filterParams.push(this.addSearchToFilterParam());
    }

    this.searchedFlights = this.flightService.searchFligts(this.allFlightss, filterParams);
  }


  resetFilter(): void {
    this.searchedFlights = this.allFlightss;
  }

  addSearchFromFilterParam(): ReturnType<any> {
    return new StringFilterParam("searchFromFilter", this.getFilterFieldValue("searchFromFilter"));
  }
  addSearchToFilterParam(): ReturnType<any> {
    return new StringFilterParam("searchToFilter", this.getFilterFieldValue("searchToFilter"));
  }


  getFilterFieldValue(filterFieldId: string) {
    return (<HTMLInputElement> document.getElementById(filterFieldId)).value;
  }

  onSubmit(){
    
  }
}

