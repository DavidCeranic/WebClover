import { Component, OnInit, Input } from '@angular/core';
//import { MatDialogModule } from "@angular/material/dialog";
import { MatDialog } from "@angular/material/dialog";
import { RentCarComponent } from './RentCar/rent-car/rent-car.component';
import { Car } from 'src/app/entities/Car/car';
import { Router } from '@angular/router';
import { CarDetailsService } from 'src/app/services/car/carDetails/car-details.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { Inject } from '@angular/core'; 

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.css'],
  providers: [NgbRatingConfig]
})
export class CarFilterComponent implements OnInit {

  @Input() filtredCars;
  

  constructor(public dialog: MatDialog, public router: Router, private data: CarDetailsService, config: NgbRatingConfig)//
  {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
  }

  onCreate(){
    this.dialog.open(RentCarComponent, {
      height: '300px',
      width: '400px',
    });
  }

  onSelectCar(car: Car){
    this.data.formData = car;
    this.router.navigateByUrl('/car/add-car');
    this.data.changeMessage(car);
  }

  check(){
    const userRole = JSON.parse(localStorage.getItem('sessionUserRolee'));
      if (userRole === 'ADMIN') {
        return false;
      }

      return true;
  }
}
