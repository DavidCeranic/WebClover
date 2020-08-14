import { Component, OnInit } from '@angular/core';
import { RentServiceDetailsService } from 'src/app/services/rentServices/rentServiceDetails/rent-service-details.service';
import { RentService } from 'src/app/entities/rentService/rent-service';

@Component({
  selector: 'app-admin-info',
  templateUrl: './admin-info.component.html',
  styleUrls: ['./admin-info.component.css']
})
export class AdminInfoComponent implements OnInit {

  display: string;
  service: RentServiceDetailsService;
  rentService: RentService;

  constructor() { }

  ngOnInit(): void {
    //this.service.currentMessage.subscribe(rentService => this.rentService = rentService);
  }

  onServiceRate(){
    console.log(this.rentService);
    this.display="ServiceRate";
  }

  onCarRate(){
    this.display="CarRate";
  }

  onGraph(){

  }

  onRevenues(){

  }

}
