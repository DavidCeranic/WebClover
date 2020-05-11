import { Injectable } from '@angular/core';
import { RentService } from 'src/app/entities/rentService/rent-service';
import { CarService } from '../car/car.service';
import { AbstractFilterParam } from 'src/app/entities/abstract-filter-param/abstract-filter-param';
import { StringFilterParam } from 'src/app/entities/string-filter-param/string-filter-param';


@Injectable({
  providedIn: 'root'
})
export class RentServicesService {

  constructor() { }

  loadRentServices() {
    return this.mockedRentSer();
  }

  filterServices(allCars: RentService[], filterParams: AbstractFilterParam[]): RentService[] {
    let filteredCars = new Array<RentService>();
    for (const car of allCars) {
      let addCar = true;
      for (const filterParam of filterParams) {
        if (this.checkServiceName(car, filterParam)) {
            addCar = false;
            break;
        }

        if (this.checkLocation(car, filterParam)) {
        addCar = false;
        break;
        }
      }

      if (addCar)
        filteredCars.push(car);
    }

    return filteredCars;
  }

  checkServiceName(car: RentService, filterParam: AbstractFilterParam): boolean {
    return filterParam instanceof StringFilterParam && filterParam.getFilterParamName() === 'rentServiceFilter' && !car.serviceName.toLowerCase().includes(filterParam.getFilterParamValue().toLowerCase());
  }

  checkLocation(car: RentService, filterParam: AbstractFilterParam): boolean {
    return filterParam instanceof StringFilterParam && filterParam.getFilterParamName() === 'rentServiceFilter' && !car.location.toLowerCase().includes(filterParam.getFilterParamValue().toLowerCase());
  }

  mockedRentSer(): Array<RentService> {
    let allRentalService = new Array<RentService>();

    const c1 = new RentService('Hartz Rental Car', 'Novi Sad');
    const c2 = new RentService('Dollar Rental Car', 'Beograd');
    const c3 = new RentService('Avis Rental Car', 'Niš');

    allRentalService.push(c1);
    allRentalService.push(c2);
    allRentalService.push(c3);

    return allRentalService;
  }
}
