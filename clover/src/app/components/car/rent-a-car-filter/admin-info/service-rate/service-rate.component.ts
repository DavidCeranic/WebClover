import { Component, OnInit } from '@angular/core';
import { RentService } from 'src/app/entities/rentService/rent-service';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { RentServiceDetailsService } from 'src/app/services/rentServices/rentServiceDetails/rent-service-details.service';

@Component({
  selector: 'app-service-rate',
  templateUrl: './service-rate.component.html',
  styleUrls: ['./service-rate.component.css']
})
export class ServiceRateComponent implements OnInit {
  rentService: RentService;
  id: number;

  constructor(public route: ActivatedRoute, public service: RentServiceDetailsService, public router: Router) { }

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
