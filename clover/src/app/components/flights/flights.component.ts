import { Component, OnInit } from '@angular/core';
import {AllFlightsService} from 'src/app/services/allFligts/all-flights.service';
import {FlightInfo} from 'src/app/entities/flightInfo/flight-info';
import {SearchFlightService} from 'src/app/services/searchFlight/search-flight.service';
import { AbstractFilterParam } from 'src/app/entities/abstract-filter-param/abstract-filter-param';
import { StringFilterParam } from 'src/app/entities/string-filter-param/string-filter-param';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AboutCompany} from "src/app/entities/aboutCompany/about-company"
import {AvioCompanyService} from 'src/app/services/avioCompany/avio-company.service'
import {AvioCompanyDetailsService} from 'src/app/services/avioCompany/avio-company-details.service';
@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})

export class FlightsComponent implements OnInit {

  //avioCompService = AvioCompanyService;
  allAvioCompanies:Array<AboutCompany>

  
  allFlightss:Array<FlightInfo>;
  searchedFlights: Array<FlightInfo>

  constructor(private flightService: AllFlightsService,private avioCompService:AvioCompanyService, private router: Router, private route: ActivatedRoute,private data:AvioCompanyService){
    this.allFlightss=this.flightService.getFlights();
    this.searchedFlights=this.allFlightss;
    this.allAvioCompanies=this.avioCompService.loadAllAvioCompanies();
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
  onSelect(service: AboutCompany){
    this.router.navigateByUrl('/company-profile');
    this.data.changeMessage(service);
  }

}

