import { Component, OnInit } from '@angular/core';
import { RentService } from 'src/app/entities/rentService/rent-service';
import { RentServiceDetailsService } from 'src/app/services/rentServices/rentServiceDetails/rent-service-details.service';

@Component({
  selector: 'app-about-rent',
  templateUrl: './about-rent.component.html',
  styleUrls: ['./about-rent.component.css']
})
export class AboutRentComponent implements OnInit {
  
  rentService: RentService;
  data: RentServiceDetailsService;

  constructor(data: RentServiceDetailsService) { 
    this.data = data;
  }

  ngOnInit(): void {
    //this.data.currentMessage.subscribe(rentService => this.rentService = rentService);
    this.rentService = this.data.selectedService;
  }

}
