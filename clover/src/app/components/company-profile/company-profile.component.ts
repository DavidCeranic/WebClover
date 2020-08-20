import { Component, OnInit } from '@angular/core';
import {AllFlightsService} from 'src/app/services/allFligts/all-flights.service';
import {FlightInfo} from 'src/app/entities/flightInfo/flight-info';
import { AvioCompanyService } from 'src/app/services/avioCompany/avio-company.service';
import {AboutCompany} from 'src/app/entities/aboutCompany/about-company'
import { AvioCompanyDetailsService } from 'src/app/services/avioCompany/avio-company-details/avio-company-details.service';
import { FormGroup, NgForm } from '@angular/forms';
import {AllFligtsDetailsService} from 'src/app/services/allFligts/all-flights-details/all-flights-details.service'
import { NumberFilterParam } from 'src/app/entities/number-filter-param/number-filter-param';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  addFlight : FormGroup

  allFlightss:Array<FlightInfo>;
  id:number;

  constructor(private flightService: AllFlightsService,private data:AvioCompanyService,public service :AllFligtsDetailsService ){
 // this.service.refreshList();
 //this.service.messageEvent.subscribe( x => {
//})
  }

  abtCompany : AboutCompany;
  abtC2:AvioCompanyDetailsService;
  ngOnInit(): void {
    this.resetForm();
    this.data.currentMessage.subscribe(abtCompany => this.abtCompany = abtCompany);
    this.service.refreshList().subscribe(
      data=>{
        this.allFlightss=data;
      //  this.searchedFlights = this.allFlightss;
       }
); 
  }
  onSubmit(form: NgForm){
    this.service.postFlightDetails(form.value).subscribe(
      res => {
        this.resetForm(form);
      },
      err => {
        console.log(err);
      }
    )
    
  }
  onClear() {
    this.addFlight.reset();
  }

  getFieldValue(filterFieldId: string) {
    return (<HTMLInputElement> document.getElementById(filterFieldId)).value;
  }


  resetForm(form?: NgForm){
    if(form!=null)
      form.resetForm();
      this.service.formData = {
        flightID:0,
        from:"",
        to:"",
        departing:"",
        returning:"",  
        classf:"",
        baggage:"",
        stops:0,
        duration:"",
        companyName:"",
        price:0,
        seatsNumber:0,
        rateFlight:0
        
      }
}
}
