import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/entities/Car/car';
import { CarDetailsService } from 'src/app/services/car/carDetails/car-details.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  car: Car;

  constructor(private data: CarDetailsService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(car => this.car = car);
  }

  getFieldValue(filterFieldId: string) {
    return (<HTMLInputElement> document.getElementById(filterFieldId)).value;
  }

  AddCar(){
    this.car.serviceName = this.getFieldValue("serviceName");
    this.car.brand = this.getFieldValue("brand");
    this.car.model = this.getFieldValue("model");
    //this.car.year = this.getFieldValue("year");
    //this.car.pricePerDay = this.getFieldValue("pricePerDay");
    //this.car.numOfSeats = this.getFieldValue("numberOfSeats");
  }

}
