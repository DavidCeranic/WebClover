import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'src/app/entities/Car/car'
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-rent-a-car',
  templateUrl: './rent-a-car.component.html',
  styleUrls: ['./rent-a-car.component.css']
})
export class RentACarComponent implements OnInit {
  allCars: Array<Car>;

  
  constructor(private carService: CarService) { 
    this.allCars = this.carService.loadCars();
  }

  ngOnInit(): void {
  }

}
