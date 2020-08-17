import { Component, OnInit } from '@angular/core';
import { OfficeDetailsService } from 'src/app/services/officeDetails/office-details.service';
import { NgForm, FormGroup } from '@angular/forms';
import { RentServiceDetailsService } from 'src/app/services/rentServices/rentServiceDetails/rent-service-details.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-office',
  templateUrl: './add-office.component.html',
  styleUrls: ['./add-office.component.css']
})
export class AddOfficeComponent implements OnInit {
  addOfficeForm: FormGroup;

  constructor(public service: OfficeDetailsService, public rentService: RentServiceDetailsService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.insertOffice(form);
  }

  insertOffice(form: NgForm){
    this.rentService.selectedService.serviceCars.push(form.value);

        this.rentService.putRentService(this.rentService.selectedService, this.rentService.selectedService.serviceId).subscribe(
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
        name: "",
        address: "",
        lat: 0,
        lng: 0
      }
  }

}
