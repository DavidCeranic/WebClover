import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'src/app/entities/Car/car'
import { CarService } from 'src/app/services/car/car.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rent-a-car',
  templateUrl: './rent-a-car.component.html',
  styleUrls: ['./rent-a-car.component.css']
})
export class RentACarComponent implements OnInit {
  allCars: Array<Car>;
  showStr = "Locations";
  SearchCarForm: FormGroup;
  
  constructor(private carService: CarService) { 
    this.allCars = this.carService.loadCars();
  }

  ngOnInit(): void {
  }

  navigateTo(section: string){
    window.location.hash='';
    window.location.hash = section;
  }

}
