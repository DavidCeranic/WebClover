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


@Component({
  selector: 'app-rent-a-car',
  templateUrl: './rent-a-car.component.html',
  styleUrls: ['./rent-a-car.component.css']
})
export class RentACarComponent implements OnInit {
  rentService: RentService;

  showStr = "Locations";
  SearchCarForm: FormGroup;

  allCars: Array<Car>;
  filtredCars: Array<Car>;

  ngOnInit(): void {
    this.service.refreshList();
    this.initForm();
    this.data.currentMessage.subscribe(rentService => this.rentService = rentService);
  }
  
  constructor(public dialog: MatDialog, private carService: CarService, private data: RentServiceDetailsService, public service: CarDetailsService) { 
    this.allCars = this.service.list;
    this.filtredCars = this.allCars;
  }

  filterCars(): void {
    let filterParams = new Array<AbstractFilterParam>();
    if (this.getFilterFieldValue("startLocationFilter")) {
      filterParams.push(this.addNameServiceFilterParam());
    }

    if (this.getFilterFieldValue("endLocationFilter")) {
      filterParams.push(this.addEndLocationFilterParam());
    }

    if (this.getFilterFieldValue("carMaxPerDayPriceFilter")) {
      filterParams.push(this.addCarMaxPerDayPriceFilterParam());
    }

    this.filtredCars = this.carService.filterCars(this.allCars, filterParams);
  }

  resetFilter(): void {
    this.filtredCars = this.allCars;
  }

  addNameServiceFilterParam(): ReturnType<any> {
    return new StringFilterParam("startLocationFilter", this.getFilterFieldValue("startLocationFilter"));
  }

  addEndLocationFilterParam(): ReturnType<any> {
    return new StringFilterParam("endLocationFilter", this.getFilterFieldValue("endLocationFilter"));
  }

  addCarMaxPerDayPriceFilterParam(): ReturnType<any> {
    return new NumberFilterParam("carMaxPerDayPriceFilter", +this.getFilterFieldValue("carMaxPerDayPriceFilter"));
  }

  getFilterFieldValue(filterFieldId: string) {
    return (<HTMLInputElement> document.getElementById(filterFieldId)).value;
  }

  private initForm() {
    this.SearchCarForm = new FormGroup({
      'Place': new FormControl('', Validators.required),
      'StartDate': new FormControl('', Validators.required),
      'EndDate': new FormControl('', Validators.required)
    });
  }

  check(){
    const userRole = JSON.parse(localStorage.getItem('sessionUserRolee'));
      if (userRole === 'ADMIN' || userRole === "RENTADMIN") {
        return false;
      }

      return true;
  }

  navigateTo(section: string){
    window.location.hash='';
    window.location.hash = section;
  }

  onSubmit(){
    
  }

  onAddCar(){
    this.dialog.open(AddCarComponent, {
      height: '600px',
      width: '500px',
    });
  }
}
