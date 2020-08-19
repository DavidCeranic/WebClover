import { Component, OnInit } from '@angular/core';
import { AbstractFilterParam } from 'src/app/entities/abstract-filter-param/abstract-filter-param';
import { StringFilterParam } from 'src/app/entities/string-filter-param/string-filter-param';
import { NumberFilterParam } from 'src/app/entities/number-filter-param/number-filter-param';
import { Car } from 'src/app/entities/Car/car';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RentService } from 'src/app/entities/rentService/rent-service';
import { MatDialog } from '@angular/material/dialog';
import { CarService } from 'src/app/services/car/car.service';
import { RentServiceDetailsService } from 'src/app/services/rentServices/rentServiceDetails/rent-service-details.service';
import { CarDetailsService } from 'src/app/services/car/carDetails/car-details.service';
import { AddCarComponent } from '../../../add-car/add-car.component';
import { Params, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cars-rent',
  templateUrl: './cars-rent.component.html',
  styleUrls: ['./cars-rent.component.css']
})
export class CarsRentComponent implements OnInit {
  allCars: Array<Car>;
  filtredCars: Array<Car>;
  SearchCarForm: FormGroup;
  id: number;
  display="cars-rent";

  rentService: RentService;
  //data: RentServiceDetailsService;

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        console.log(this.id);
        //this.data.refreshList();
        this.rentServiceDetails.getRentServiceById(this.id).subscribe(
          dataV => {
            this.rentService = dataV;
            console.log(this.rentService);
            this.allCars = this.rentService.serviceCars;
            this.filtredCars = this.allCars;
          }
        )
      }
    )
    this.service.refreshList();
    this.initForm();
  }

  constructor(public dialog: MatDialog, private carService: CarService,private rentServiceDetails: RentServiceDetailsService, public route: ActivatedRoute, public service: CarDetailsService, public router: Router) {
    this.service.refreshList();
    this.service.messageEvent.subscribe( x => {
      //this.allCars = this.rentService.serviceCars;
      //this.filtredCars = this.allCars;
    })
   }

  onAddCar(){
    this.dialog.open(AddCarComponent, {
      height: '600px',
      width: '500px',
    });
  }

  check(){
    const userRole = JSON.parse(localStorage.getItem('sessionUserRolee'));
      if (userRole === 'ADMIN' || userRole === "RENTADMIN") {
        return false;
      }

      return true;
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

  resetFilter(): void {
    this.filtredCars = this.allCars;
  }


  onHome(){
    this.display="home";
    this.router.navigateByUrl('/car/rent-a-car/' + this.rentService.serviceId);
  }

  onAbout(){
    this.display="about-rent";
    this.router.navigateByUrl('/car/rent-a-car/' + this.rentService.serviceId + '/about');
  }

  onCars(){
    this.display="cars-rent";
    this.router.navigateByUrl('/car/rent-a-car/' + this.rentService.serviceId + '/cars');
  }

  onLocations(){
    this.display="locations-rent";
    this.router.navigateByUrl('car/rent-a-car/' + this.rentService.serviceId + '/locations');
  }

}
