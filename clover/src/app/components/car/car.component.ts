import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Car } from 'src/app/entities/Car/car'
import { CarService } from 'src/app/services/car/car.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RentService } from 'src/app/entities/rentService/rent-service';
import { RentServicesService } from 'src/app/services/rentServices/rent-services.service';
import { AbstractFilterParam } from 'src/app/entities/abstract-filter-param/abstract-filter-param';
import { StringFilterParam } from 'src/app/entities/string-filter-param/string-filter-param';



@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  SearchCarForm: FormGroup;
  rentService: string;
  display = false;

  allRentServices: Array<RentService>;
  filtredRentServices: Array<RentService>;

  constructor(private rentServices: RentServicesService, private router: Router, private route: ActivatedRoute) { 
    this.allRentServices = this.rentServices.loadRentServices();
    this.filtredRentServices = this.allRentServices;
  }

  ngOnInit(): void {
    this.initForm();
  }

  filterServices(): void {
    //this.filteredCars = new Array<Car>();
    let filterParams = new Array<AbstractFilterParam>();
    if (this.getFilterFieldValue("rentServiceFilter")) {
      filterParams.push(this.addNameServiceFilterParam());
    }
    //if (this.getFilterFieldValue("rentServiceFilter")) {
      //filterParams.push(this.addLocationFilterParam());
    //}

    this.filtredRentServices = this.rentServices.filterServices(this.allRentServices, filterParams);
  }

  resetFilter(): void {
    this.filtredRentServices = this.allRentServices;
  }

  addNameServiceFilterParam(): ReturnType<any> {
    return new StringFilterParam("rentServiceFilter", this.getFilterFieldValue("rentServiceFilter"));
  }

  addLocationFilterParam(): ReturnType<any> {
    return new StringFilterParam("rentServiceFilter", this.getFilterFieldValue("rentServiceFilter"));
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

  onSubmit() {
  }

  onClick(ServiceName: string) {
    this.rentService = ServiceName;
    this.display = true;
  }

  Prikaz() : boolean{
    return this.display;
  }

  check(){
    const userRole = JSON.parse(localStorage.getItem('sessionUserRolee'));
      if (userRole === 'ADMIN') {
        return false;
      }
      
      return true;
  }
}
