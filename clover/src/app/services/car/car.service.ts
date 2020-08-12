import { Injectable } from '@angular/core';
import { Car } from 'src/app/entities/Car/car';
import { AbstractFilterParam } from 'src/app/entities/abstract-filter-param/abstract-filter-param';
import { StringFilterParam } from 'src/app/entities/string-filter-param/string-filter-param';
import { NumberFilterParam } from 'src/app/entities/number-filter-param/number-filter-param';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  loadCars() {
    return this.mockedCars();
  }

  filterCars(allCars: Car[], filterParams: AbstractFilterParam[]): Car[] {
    let filteredCars = new Array<Car>();
    for (const car of allCars) {
      let addCar = true;
      for (const filterParam of filterParams) {
        if (this.checkStartLocationFilter(car, filterParam)) {
            addCar = false;
            break;
        }

        if (this.checkEndLocationFilter(car, filterParam)) {
          addCar = false;
          break;
        }  

        if (this.checkCarMaxPerDayPriceFilter(car, filterParam)) {
          addCar = false;
          break;
        }
      }

      if (addCar)
        filteredCars.push(car);
    }

    return filteredCars;
  }

  checkStartLocationFilter(car: Car, filterParam: AbstractFilterParam): boolean {
    return filterParam instanceof StringFilterParam && filterParam.getFilterParamName() === 'startLocationFilter' && !car.location.toLowerCase().includes(filterParam.getFilterParamValue().toLowerCase());
  }

  checkEndLocationFilter(car: Car, filterParam: AbstractFilterParam): boolean {
    return filterParam instanceof StringFilterParam && filterParam.getFilterParamName() === 'endLocationFilter' && !car.endLocation.toLowerCase().includes(filterParam.getFilterParamValue().toLowerCase());
  }

  checkCarMaxPerDayPriceFilter(car: Car, filterParam: AbstractFilterParam): boolean {
    return filterParam instanceof NumberFilterParam && filterParam.getFilterParamName() === 'carMaxPerDayPriceFilter' && (car.pricePerDay > filterParam.getFilterParamValue());
  }

  mockedCars(): Array<Car>{
    let allCars = new Array<Car>();
    
   /**  const c1 = new Car("Hertz Rental Car", 'Audi', 'RS5', 2020, 245 ,5, "https://media.caradvice.com.au/image/private/q_auto/v1576000037/mwipz4iizvxb98qjgtb5.jpg", "Novi Sad", "Novi Sad", "putnicko", "4");
    const c2 = new Car("Hertz Rental Car", 'BMW', 'M5', 2017, 175, 5, "https://2.bp.blogspot.com/-NnwdGJCcFtU/WeYW7PLpFcI/AAAAAAAAAIU/_PEDAp59_8kmYQF6m7LObz7lhfqRQknWgCK4BGAYYCw/s1600/4976_h9gWqJH2tRzBF-p1.jpg", "Beograd", "Novi Sad", "putnicko", "5");
    const c3 = new Car("Hertz Rental Car", 'Golf', 'R', 2020, 150, 5, "https://cloud.leparking.fr/2019/05/19/00/11/volkswagen-golf-volkswagen-golf-r-dsg-pan-roof-dcc-carbon-leather-dynadio-rev-cam-keyless-2016-blanc_6874159045.jpg", "Novi Sad", "Novi Sad", "putnicko", "4");
    const c4 = new Car("Hertz Rental Car", 'Mercedes', 'AMG GT63', 2019, 437, 4, "https://www.mercedes-benz.rs/passengercars/mercedes-benz-cars/models/amg-gt/4-door-coupe/explore/exterior/_jcr_content/highlightcontainer/image.MQ6.0.20200126004454.jpeg", "Bor", "Bor", "putnicko", "5");
    const c5 = new Car("Hertz Rental Car", 'Toyota', 'Yaris', 2018, 86, 5, "https://t1-cms-2.images.toyota-europe.com/toyotaone/rssr/toyota-yaris-2019-gallery-02-full_tcm-3038-1633910.jpg", "Nis", "Nis", "putnicko", "3");

    allCars.push(c1);
    allCars.push(c2);
    allCars.push(c3);
    allCars.push(c4);
    allCars.push(c5);
    */

    return allCars;
  }
}