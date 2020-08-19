import { Component, OnInit } from '@angular/core';
import { OfficeDetailsService } from 'src/app/services/officeDetails/office-details.service';
import { NgForm, FormGroup } from '@angular/forms';
import { RentServiceDetailsService } from 'src/app/services/rentServices/rentServiceDetails/rent-service-details.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Params } from '@angular/router';
import { RentService } from 'src/app/entities/rentService/rent-service';

@Component({
  selector: 'app-add-office',
  templateUrl: './add-office.component.html',
  styleUrls: ['./add-office.component.css']
})
export class AddOfficeComponent implements OnInit {
  addOfficeForm: FormGroup;
  id: number;
  rentService: RentService;

  constructor(public service: OfficeDetailsService, public rentServiceServis: RentServiceDetailsService, private toastr: ToastrService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.resetForm();
    
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.rentServiceServis.getRentServiceById(this.id).subscribe(
          dataV => {
            this.rentService = dataV;
            console.log(this.rentService);
          }
        )
      }
    )
  }

  onSubmit(form: NgForm){
    this.insertOffice(form);
  }

  insertOffice(form: NgForm){
    //console.log(this.rentService);
    this.rentServiceServis.selectedService.serviceOffice.push(form.value);

        this.rentServiceServis.putRentService(this.rentServiceServis.selectedService, this.rentServiceServis.selectedService.serviceId).subscribe(
          res => {  
            this.toastr.success("Inserted Successfully");
            this.resetForm(form);
            this.service.refreshList();
          },
          err => {
            this.toastr.error('error');
          }
        )
  }

  onClear() {
    this.addOfficeForm.reset();
  }

  resetForm(form?: NgForm){
    if(form!=null)
      form.resetForm();
      this.service.formData = {
        officeId: null,
        officeName: "",
        address: "",
        lat: 0,
        lng: 0,
        RentServiceServiceId: null
      }
  }

}
