import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Car } from 'src/app/entities/Car/car';
import { CarDetailsService } from 'src/app/services/car/carDetails/car-details.service';

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent implements OnInit {
  car: Car;
  NumOfDays: number;

  constructor(public service: CarDetailsService) { }

  ngOnInit(): void {
    this.service.currentMessage.subscribe(car => this.car = car);
  }

  onSubmit(form: NgForm){

  }
}
