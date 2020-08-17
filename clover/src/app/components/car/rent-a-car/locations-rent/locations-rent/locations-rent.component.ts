import { Component, OnInit } from '@angular/core';
import { RentService } from 'src/app/entities/rentService/rent-service';
import { RentServiceDetailsService } from 'src/app/services/rentServices/rentServiceDetails/rent-service-details.service';
import { MatDialog } from '@angular/material/dialog';
import { AddOfficeComponent } from './add-office/add-office/add-office.component';
import { OfficeDetailsService } from 'src/app/services/officeDetails/office-details.service';
import { ToastrService } from 'ngx-toastr';
import { Office } from 'src/app/entities/office/office';

@Component({
  selector: 'app-locations-rent',
  templateUrl: './locations-rent.component.html',
  styleUrls: ['./locations-rent.component.css']
})
export class LocationsRentComponent implements OnInit {
  allOffice: Array<Office>;
  rentService: RentService;
  data: RentServiceDetailsService;

  constructor(public dialog: MatDialog, data: RentServiceDetailsService, private service: OfficeDetailsService, private toastr: ToastrService) { 
    this.data = data;
    this.service.refreshList();
    this.service.messageEvent.subscribe( x => {
      //this.allOffice = this.data.selectedService.;
    })
  }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(rentService => this.rentService = rentService);
  }

  check(){
    const userRole = JSON.parse(localStorage.getItem('sessionUserRolee'));
      if (userRole === 'ADMIN' || userRole === "RENTADMIN") {
        return false;
      }

      return true;
  }

  onAddOffice(rentService: RentService){
    this.dialog.open(AddOfficeComponent, {
      height: '600px',
      width: '500px',
    });
  }

  onDelete(carId: number){
    if(confirm('Are you sure to delete this car?')){
    this.service.deleteOffice(carId).subscribe( res => {
      this.toastr.warning("Deleted Successfully");
      //this.dataCars.selectedService.serviceCars =  this.dataCars.list;
      //this.dataCars.refreshList();
    },
    err => {
      this.toastr.error('error');
        }
      )
    }
  }

}
