import { Component, OnInit } from '@angular/core';
import {AllFlightsService} from 'src/app/services/allFligts/all-flights.service';
import {FlightInfo} from 'src/app/entities/flightInfo/flight-info';
import { AvioCompanyService } from 'src/app/services/avioCompany/avio-company.service';
import {AboutCompany} from 'src/app/entities/aboutCompany/about-company'
import { AvioCompanyDetailsService } from 'src/app/services/avioCompany/avio-company-details/avio-company-details.service';
import { FormGroup, NgForm } from '@angular/forms';
import {AllFligtsDetailsService} from 'src/app/services/allFligts/all-flights-details/all-flights-details.service'
import { NumberFilterParam } from 'src/app/entities/number-filter-param/number-filter-param';
import { ActivatedRoute, Params} from '@angular/router';
import { MatDialog } from "@angular/material/dialog";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  addFlight : FormGroup

  allFlightss:Array<FlightInfo>;
  companyData:AboutCompany;
  id:number;

  constructor(private flightService: AllFlightsService, private toastr: ToastrService,public route: ActivatedRoute,private data:AvioCompanyService,public service :AllFligtsDetailsService,public companyService: AvioCompanyDetailsService ){
 // this.service.refreshList();
 //this.service.messageEvent.subscribe( x => {
//})
  }

  abtCompany : AboutCompany;
  abtC2:AvioCompanyDetailsService;
  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['compID'];
        console.log(this.id);
        //this.data.refreshList();
        this.companyService.getAvioCompanyById(this.id).toPromise().then(
          dataV => {
          this.companyData = dataV;
        //    console.log(this.rentService);
          }
        )
      }
    )


    this.resetForm();
    this.data.currentMessage.toPromise().then(abtCompany => this.abtCompany = abtCompany);
    this.service.refreshList().toPromise().then(
      data=>{
        this.allFlightss = new Array<FlightInfo>();
        data.forEach(item=>{
          if(item.companyAboutAvioCompID == this.id){
            this.allFlightss.push(item);
          }
        })
        // this.allFlightss=data;
      //  this.searchedFlights = this.allFlightss;
       }
); 
  }
  onSubmit(form: NgForm){
    console.log(form.value);
     this.service.postFlightDetails(form.value, this.id).subscribe(
       res => {
         this.resetForm(form);
      },
      err => {
        console.log(err);
      }
     )
   // this.insertFlight(form);

  }
  onClear() {
    this.addFlight.reset();
  }

  getFieldValue(filterFieldId: string) {
    return (<HTMLInputElement> document.getElementById(filterFieldId)).value;
  }

  insertFlight(form:NgForm){

    this.companyData.companyFlights.push(form.value);

    this.companyService.putAvioCompany(this.companyData,this.id).subscribe(
      res=>{
        this.toastr.success("Add Succesfully");
        this.resetForm(form);
        this.service.refreshList();

      },
      err=>{
        this.toastr.error('error');
      }
    )
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
        rateFlight:0,
        userDetailUserId:0,
        companyAboutAvioCompID:0
        
      }
}
}
