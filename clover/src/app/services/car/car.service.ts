import { Injectable } from '@angular/core';
import { Car } from 'src/app/entities/Car/car'

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  loadCars() {
    return this.mockedCars();
  }

  mockedCars(): Array<Car>{
    let allCars = new Array<Car>();
    
    const c1 = new Car(1, 'Audi', 'RS5', 2020, 245);
    const c2 = new Car(2, 'BMW', 'M5', 2017, 175);
    const c3 = new Car(3, 'Yugo', 'Koral 45', 1991, 25);
    const c4 = new Car(4, 'Mercedec', 'AMG GT63', 2019, 437);
    const c5 = new Car(5, 'Toyota', 'Yaris', 2010, 86);

    allCars.push(c1);
    allCars.push(c2);
    allCars.push(c3);
    allCars.push(c4);
    allCars.push(c5);

    return allCars;
  }
}