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
import {AvioCompanyDetailsService} from "src/app/services/avioCompany/avio-company-details/avio-company-details.service";
import { AllFligtsDetailsService } from 'src/app/services/allFligts/all-flights-details/all-flights-details.service';
@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})

export class FlightsComponent implements OnInit {

  //avioCompService = AvioCompanyService;
  allAvioCompanies:Array<AboutCompany>

  
  allFlightss = new Array<FlightInfo>();
  searchedFlights = new Array<FlightInfo>();

  constructor(private flightService: AllFlightsService,private avioCompService:AvioCompanyService, private router: Router, private route: ActivatedRoute,private data:AvioCompanyService,public service :AvioCompanyDetailsService,public service2 :AllFligtsDetailsService){
 
  }

  ngOnInit(): void {
    this.service.refreshList().subscribe(
      data=>{
        this.allAvioCompanies=data;
      }
    );
    this.service2.refreshList().subscribe(
           data=>{
             this.allFlightss=data;
             this.searchedFlights = this.allFlightss;
            }
    ); 
   
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
  check(){
    const userRole = JSON.parse(localStorage.getItem('sessionUserRolee'));
      if (userRole === 'ADMIN') {
        return false;
      }
      
      return true;
  }
}

