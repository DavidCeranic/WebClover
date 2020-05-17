import { Component, OnInit } from '@angular/core';
import { RentService } from 'src/app/entities/rentService/rent-service';
import { Car } from 'src/app/entities/Car/car';
import { RentServiceDetailsService } from 'src/app/services/rentServices/rentServiceDetails/rent-service-details.service';

@Component({
  selector: 'app-add-rent-a-car',
  templateUrl: './add-rent-a-car.component.html',
  styleUrls: ['./add-rent-a-car.component.css']
})
export class AddRentACarComponent implements OnInit {

  rentService: RentService;
  SelectedCar: Car;

  constructor(private data: RentServiceDetailsService) { 
  }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(rentService => this.rentService = rentService);
  }

  getFieldValue(filterFieldId: string) {
    return (<HTMLInputElement> document.getElementById(filterFieldId)).value;
  }

  AddRentService(){
    this.rentService.serviceName = this.getFieldValue("serviceName");
    this.rentService.location = this.getFieldValue("location");
    this.rentService.about = this.getFieldValue("about");
    this.rentService.contact = this.getFieldValue("contact");
    this.rentService.cars = null;
  }

}
