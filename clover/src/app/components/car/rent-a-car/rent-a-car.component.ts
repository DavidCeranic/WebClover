import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'src/app/entities/Car/car'
import { CarService } from 'src/app/services/car/car.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AbstractFilterParam } from 'src/app/entities/abstract-filter-param/abstract-filter-param';
import { StringFilterParam } from 'src/app/entities/string-filter-param/string-filter-param';
import { NumberFilterParam } from 'src/app/entities/number-filter-param/number-filter-param';
import { RentServiceDetailsService } from 'src/app/services/rentServices/rentServiceDetails/rent-service-details.service';
import { RentService } from 'src/app/entities/rentService/rent-service';
import { CarDetailsService } from 'src/app/services/car/carDetails/car-details.service';
import { AddCarComponent } from '../add-car/add-car.component';
import { MatDialog } from "@angular/material/dialog";
import { Router } from '@angular/router';


@Component({
  selector: 'app-rent-a-car',
  templateUrl: './rent-a-car.component.html',
  styleUrls: ['./rent-a-car.component.css']
})
export class RentACarComponent implements OnInit {
  rentService: RentService;
  display="home";
  showStr = "Locations";
  data: RentServiceDetailsService;
  

  ngOnInit(): void {
    this.service.refreshList();
    //this.data.currentMessage.subscribe(rentService => this.rentService = rentService);
    this.rentService = this.data.selectedService;
  }
  
  constructor(public dialog: MatDialog, private carService: CarService, data: RentServiceDetailsService, public router: Router, public service: CarDetailsService) 
  { 
    this.data = data;
    this.rentService = this.data.selectedService;
  }

  navigateTo(section: string){
    window.location.hash='';
    window.location.hash = section;
  }

  onHome(){
    this.display="home";
  }

  onAbout(){
    this.display="about-rent";
    //this.router.navigateByUrl('/car/rent-a-car/about');
  }

  onCars(){
    this.display="cars-rent";
    //this.router.navigateByUrl('/car/rent-a-car/cars');
  }

  onLocations(){
    this.display="locations-rent";
    //this.router.navigateByUrl('car/rent-a-car/locations');
  }
}
