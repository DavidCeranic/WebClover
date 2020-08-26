import { Component, OnInit } from '@angular/core';
import { RentServiceDetailsService } from 'src/app/services/rentServices/rentServiceDetails/rent-service-details.service';
import { RentService } from 'src/app/entities/rentService/rent-service';
import { Car } from 'src/app/entities/Car/car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fast-rent-car',
  templateUrl: './fast-rent-car.component.html',
  styleUrls: ['./fast-rent-car.component.css']
})
export class FastRentCarComponent implements OnInit {
  rentService: RentService;
  allCars: Array<Car>;

  constructor(private rentServiceDetails: RentServiceDetailsService, public router: Router) { }

  ngOnInit(): void {
    this.rentServiceDetails.getRentServiceById(0).subscribe(
      dataV => {
        this.rentService = dataV;
        this.allCars = this.rentService.serviceCars;
      }
    )
  }


  onRent(car: Car){
    this.router.navigateByUrl('/car/rent-a-car/' + this.rentService.serviceId + '/rent/' + car.carId);
  }
}
