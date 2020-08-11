import { Component, OnInit } from '@angular/core';
import {AllFlightsService} from 'src/app/services/allFligts/all-flights.service';
import {FlightInfo} from 'src/app/entities/flightInfo/flight-info';
import { AvioCompanyService } from 'src/app/services/avioCompany/avio-company.service';
import {AboutCompany} from 'src/app/entities/aboutCompany/about-company'
import { AvioCompanyDetailsService } from 'src/app/services/avioCompany/avio-company-details/avio-company-details.service';
import { FormGroup, NgForm } from '@angular/forms';
import {AllFligtsDetailsService} from 'src/app/services/allFligts/all-flights-details/all-flights-details.service'
@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  addFlight : FormGroup

  allFlightss:Array<FlightInfo>;


  constructor(private flightService: AllFlightsService,private data:AvioCompanyService,public service :AllFligtsDetailsService ){
    this.allFlightss=this.service.list;
  }

  abtCompany : AboutCompany;
  abtC2:AvioCompanyDetailsService;
  ngOnInit(): void {
    this.resetForm();
    this.data.currentMessage.subscribe(abtCompany => this.abtCompany = abtCompany);
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
