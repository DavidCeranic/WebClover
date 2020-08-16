import { Component, OnInit, Input } from '@angular/core';
//import { MatDialogModule } from "@angular/material/dialog";
import { MatDialog } from "@angular/material/dialog";
import { RentCarComponent } from './RentCar/rent-car/rent-car.component';
import { Car } from 'src/app/entities/Car/car';
import { Router } from '@angular/router';
import { CarDetailsService } from 'src/app/services/car/carDetails/car-details.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { Inject } from '@angular/core'; 
import { AddCarComponent } from '../add-car/add-car.component';
import { ToastrService } from 'ngx-toastr';
import { RentServiceDetailsService } from 'src/app/services/rentServices/rentServiceDetails/rent-service-details.service';
import { ChangeCarComponent } from '../add-car/change-car/change-car.component';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.css'],
  providers: [NgbRatingConfig]
})
export class CarFilterComponent implements OnInit {

  @Input() filtredCars;
  dataCars: RentServiceDetailsService;
  id: number;

  constructor(public dialog: MatDialog, dataCars: RentServiceDetailsService, private toastr: ToastrService, public service: CarDetailsService, public router: Router, private data: CarDetailsService, config: NgbRatingConfig)//
  {
    config.max = 5;
    config.readonly = true;
    this.dataCars = dataCars;
  }

  ngOnInit(): void {
  }

  onRent(car: Car){
    this.dialog.open(RentCarComponent, {
      height: '400px',
      width: '650px',
    });
    this.data.changeMessage(car);
  }

  onSelectCar(car: Car){
    this.data.formData = car;
    this.dialog.open(ChangeCarComponent, {
      height: '600px',
      width: '500px',
    });
    this.data.changeMessage(car);
  }

  onDelete(carId: number){
    if(confirm('Are you sure to delete this car?')){
    this.service.deleteCar(carId).subscribe( res => {
      this.toastr.warning("Deleted Successfully");
      //this.dataCars.selectedService.serviceCars =  this.dataCars.list;
      this.dataCars.refreshList();
    },
    err => {
      this.toastr.error('error');
        }
      )
    }
  }

  check(){
    const userRole = JSON.parse(localStorage.getItem('sessionUserRolee'));
      if (userRole === 'ADMIN' || userRole === "RENTADMIN") {
        return false;
      }

      return true;
  }
}
