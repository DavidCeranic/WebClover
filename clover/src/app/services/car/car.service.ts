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
    
    const c1 = new Car("Hertz Rental Car", 'Audi', 'RS5', 2020, 245 ,5, "https://media.caradvice.com.au/image/private/q_auto/v1576000037/mwipz4iizvxb98qjgtb5.jpg", "Novi Sad");
    const c2 = new Car("Hertz Rental Car", 'BMW', 'M5', 2017, 175, 5, "https://2.bp.blogspot.com/-NnwdGJCcFtU/WeYW7PLpFcI/AAAAAAAAAIU/_PEDAp59_8kmYQF6m7LObz7lhfqRQknWgCK4BGAYYCw/s1600/4976_h9gWqJH2tRzBF-p1.jpg", "Beograd");
    const c3 = new Car("Hertz Rental Car", 'Golf', 'R', 2020, 150, 5, "https://cloud.leparking.fr/2019/05/19/00/11/volkswagen-golf-volkswagen-golf-r-dsg-pan-roof-dcc-carbon-leather-dynadio-rev-cam-keyless-2016-blanc_6874159045.jpg", "Novi Sad");
    const c4 = new Car("Hertz Rental Car", 'Mercedes', 'AMG GT63', 2019, 437, 4, "https://www.mercedes-benz.rs/passengercars/mercedes-benz-cars/models/amg-gt/4-door-coupe/explore/exterior/_jcr_content/highlightcontainer/image.MQ6.0.20200126004454.jpeg", "Bor");
    const c5 = new Car("Hertz Rental Car", 'Toyota', 'Yaris', 2018, 86, 5, "https://t1-cms-2.images.toyota-europe.com/toyotaone/rssr/toyota-yaris-2019-gallery-02-full_tcm-3038-1633910.jpg", "Nis");

    allCars.push(c1);
    allCars.push(c2);
    allCars.push(c3);
    allCars.push(c4);
    allCars.push(c5);

    return allCars;
  }
}