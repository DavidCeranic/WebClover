import { Component, OnInit } from '@angular/core';
import {AllFlightsService} from 'src/app/services/allFligts/all-flights.service';
import {FlightInfo} from 'src/app/entities/flightInfo/flight-info';
import { AvioCompanyService } from 'src/app/services/avioCompany/avio-company.service';
import {AboutCompany} from 'src/app/entities/aboutCompany/about-company'
import { AvioCompanyDetailsService } from 'src/app/services/avioCompany/avio-company-details.service';
@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  allFlightss:Array<FlightInfo>;
  constructor(private flightService: AllFlightsService,private data:AvioCompanyService){
    this.allFlightss=this.flightService.getFlights();
  }

  abtCompany : AboutCompany;
  abtC2:AvioCompanyDetailsService;
  ngOnInit(): void {
    this.data.currentMessage.subscribe(abtCompany => this.abtCompany = abtCompany);
  }

}
