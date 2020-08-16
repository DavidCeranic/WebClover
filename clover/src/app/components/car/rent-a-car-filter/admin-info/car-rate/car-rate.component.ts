import { Component, OnInit } from '@angular/core';
import { CarDetailsService } from 'src/app/services/car/carDetails/car-details.service';
import { Car } from 'src/app/entities/Car/car';

@Component({
  selector: 'app-car-rate',
  templateUrl: './car-rate.component.html',
  styleUrls: ['./car-rate.component.css']
})
export class CarRateComponent implements OnInit {

  cars: Car[];

  constructor(private service: CarDetailsService) {
      this.service.refreshList();
      this.service.messageEvent.subscribe( x => {
        this.cars = this.service.list;
      })
   }

  ngOnInit(): void {
  }

}
