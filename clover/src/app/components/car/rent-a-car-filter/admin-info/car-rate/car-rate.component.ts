import { Component, OnInit } from '@angular/core';
import { CarDetailsService } from 'src/app/services/car/carDetails/car-details.service';
import { Car } from 'src/app/entities/Car/car';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RentServiceDetailsService } from 'src/app/services/rentServices/rentServiceDetails/rent-service-details.service';
import { RentService } from 'src/app/entities/rentService/rent-service';

@Component({
  selector: 'app-car-rate',
  templateUrl: './car-rate.component.html',
  styleUrls: ['./car-rate.component.css']
})
export class CarRateComponent implements OnInit {
  rentService: RentService;
  id: number;
  cars: Car[];

  constructor(private serviceCar: CarDetailsService, public route: ActivatedRoute, public service: RentServiceDetailsService, public router: Router) {
      // this.service.refreshList();
      // this.service.messageEvent.subscribe( x => {
      //   this.cars = this.service.list;
      // })
   }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['rentid'];
        this.service.getRentServiceById(this.id).subscribe(
          dataV => {
            this.rentService = dataV;
          }
        )
      }
    )
  }

  onServiceRate(){
    this.router.navigateByUrl('/car/admin-info/' + this.rentService.serviceId + '/service-rate');
    
  }

  onCarRate(){
    this.router.navigateByUrl('/car/admin-info/' + this.rentService.serviceId + '/car-rate');
    
  }

  onGraph(){
    this.router.navigateByUrl('/car/admin-info/' + this.rentService.serviceId + '/about');
    
  }

  onRevenues(){
    this.router.navigateByUrl('/car/admin-info/' + this.rentService.serviceId + '/about');
    
  }

}
