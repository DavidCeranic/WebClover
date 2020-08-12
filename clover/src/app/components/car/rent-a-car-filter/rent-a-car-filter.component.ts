import { Component, OnInit, Input } from '@angular/core';
import { RentService } from 'src/app/entities/rentService/rent-service';
import { Router } from '@angular/router';
import { RentServiceDetailsService } from 'src/app/services/rentServices/rentServiceDetails/rent-service-details.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { AddRentACarComponent } from '../add-rent-a-car/add-rent-a-car.component';
import { MatDialog } from "@angular/material/dialog";
import { ToastrService } from 'ngx-toastr';
import { AdminInfoComponent } from './admin-info/admin-info.component';

@Component({
  selector: 'app-rent-a-car-filter',
  templateUrl: './rent-a-car-filter.component.html',
  styleUrls: ['./rent-a-car-filter.component.css']
})
export class RentACarFilterComponent implements OnInit {

  @Input() filtredRentServices;

  constructor(public dialog: MatDialog, private toastr: ToastrService, public router: Router, public service: RentServiceDetailsService, config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
   }

  ngOnInit(): void {
    this.service.refreshList();
  }

  onSelect(service: RentService){
    this.router.navigateByUrl('/car/rent-a-car');
    this.service.changeMessage(service);
  }

  onSelectRentService(service: RentService){
    this.service.formData = Object.assign({}, service);
    this.dialog.open(AddRentACarComponent, {
      height: '520px',
      width: '500px',
    });
    this.service.changeMessage(service);
  }

  onDelete(serviceId: number){
    if(confirm('Are you sure to delete this rent service?')){
    this.service.deleteRentService(serviceId).subscribe( res => {
      this.toastr.warning("Deleted Successfully");
      this.service.refreshList();
    },
    err => {
      this.toastr.error('error');
        }
      )
    }

    location.reload();
  }

  onInfo(rentService: RentService){
    this.service.formData = Object.assign({}, rentService);
    this.dialog.open(AdminInfoComponent, {
      height: '520px',
      width: '700px',
    });
    this.service.changeMessage(rentService);
  }

  check(){
    const userRole = JSON.parse(localStorage.getItem('sessionUserRolee'));
      if (userRole === 'ADMIN' || userRole === "RENTADMIN") {
        return false;
      }

      return true;
  }

}
