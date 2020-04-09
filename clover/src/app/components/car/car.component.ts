import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Car } from 'src/app/entities/Car/car'

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  SearchCarForm: FormGroup;
  allCars = new Array<Car>();

  constructor() { 
    const c1 = new Car(1, 'Audi', 'RS5', 2020, 245);
    const c2 = new Car(2, 'BMW', 'M5', 2017, 175);
    const c3 = new Car(3, 'Yugo', 'Koral 45', 1991, 25);
    const c4 = new Car(4, 'Mercedec', 'AMG GT63', 2019, 437);
    const c5 = new Car(5, 'Toyota', 'Yaris', 2010, 86);

    this.allCars.push(c1);
    this.allCars.push(c2);
    this.allCars.push(c3);
    this.allCars.push(c4);
    this.allCars.push(c5);
  }

  ngOnInit(): void {
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
}
