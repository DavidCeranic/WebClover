import { Injectable } from '@angular/core';
import { RentService } from 'src/app/entities/rentService/rent-service';
import { CarService } from '../car/car.service';
import { AbstractFilterParam } from 'src/app/entities/abstract-filter-param/abstract-filter-param';
import { StringFilterParam } from 'src/app/entities/string-filter-param/string-filter-param';
import { Car } from 'src/app/entities/Car/car';


@Injectable({
  providedIn: 'root'
})
export class RentServicesService {

  carService: CarService;
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
    return filterParam instanceof StringFilterParam && filterParam.getFilterParamName() === 'rentServiceFilter2' && !car.location.toLowerCase().includes(filterParam.getFilterParamValue().toLowerCase());
  }

  mockedRentSer(): Array<RentService> {
    let allRentalService = new Array<RentService>();
    
    const c1 = new RentService('Hartz Rental Car', 'Novi Sad', 'Automobile za sve potrebe i želje možete naći kod nas','https://rentacar-belgrade.com/wp-content/uploads/2019/02/rent-a-car-beograd-gold.jpg', 'Primero Hertz Rental Car je nosilac franšiza Europcar, InterRent i Global Rent a Car za države Srbiju i Crnu Goru. Ti brendovi su deo Europcar Mobility Group koja je prisutna u većini zemalja sveta. Osnovne delatnosti kompanije:Najam vozila u zemlji i inostranstvu Dugoročni najmovi vozila – operativni lizing Limo servis - najam vozila sa vozačem Skraćeno poslovno ime: Hertz Rental Car Puno poslovno ime: DRUŠTVO ZA TRGOVINU I USLUGE Hertz Rental Car Pravna forma: DOO - Društvo sa ograničenom odgovornošću Obveznik PDV: da Poreski identifikacioni broj: 102449114 Matični broj pravnog lica: 17453416 Registarski broj: 2780037616', null , 'Za sve nedoumice koje imate možete nas pozvati, kontaktirati putem maila ili nas posetiti na jednoj od mnogobrojnih lokacija. 3. Oktobar 20/10 Novi Sad, 21000 hertzrentalcar@gmail.com +381 21 555 555');
    const c2 = new RentService('Dollar Rental Car', 'Beograd', 'AAAAAAAAAAAAAAAAAAAAAAAAAA','https://www.zim-rentacar.com/assets/img/blog/saveti-pre-nego-sto-iznajmite-vozilo.jpg', 'AAAAAAAAAAAAAAAAAAA', null, 'AAAAAAAAAAAAAAAAA');
    const c3 = new RentService('Avis Rental Car', 'Niš', 'BBBBBBBBBBBBBBBBBBBBBBBBB','https://media.mojtrg.rs/Image/e1d9969e75f643ab9a9adfeb0178aa08/20170128/false/false/640/480/Rent-a-Car-Beograd--rent-a-car-aerodrom-Nikola-Tes.jpeg', 'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB', null, 'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB');

    allRentalService.push(c1);
    allRentalService.push(c2);
    allRentalService.push(c3);

    return allRentalService;
  }
}
