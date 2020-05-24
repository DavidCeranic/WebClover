import { Component, OnInit } from '@angular/core';
import { RentService } from 'src/app/entities/rentService/rent-service';
import { Car } from 'src/app/entities/Car/car';
import { RentServiceDetailsService } from 'src/app/services/rentServices/rentServiceDetails/rent-service-details.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-rent-a-car',
  templateUrl: './add-rent-a-car.component.html',
  styleUrls: ['./add-rent-a-car.component.css']
})
export class AddRentACarComponent implements OnInit {
  AddRentCarForm: FormGroup;

  display: boolean;

  rentService: RentService;
  SelectedCar: Car;

  constructor(public service: RentServiceDetailsService) { 
  }

  ngOnInit(): void {
    this.resetForm();
    this.display=true;
    this.service.currentMessage.subscribe(rentService => this.rentService = rentService);
  }

  getFieldValue(filterFieldId: string) {
    return (<HTMLInputElement> document.getElementById(filterFieldId)).value;
  }

  onSubmit(form: NgForm){
    this.service.postUserDetails(form.value).subscribe(
      res => {
        this.resetForm(form);
      },
      err => {
        console.log(err);
      }
    )
  }

  onClear() {
    this.AddRentCarForm.reset();
  }

  resetForm(form?: NgForm){
    if(form!=null)
      form.resetForm();
      this.service.formData = {
        serviceId: "",
        serviceName: "",
        location: "",
        img: "",
        description: "",
        priceTable: "",
        about: "",
        cars: null,
        locationMap: "",
        contact: "",
        lat: 0,
        lng:0
      }
  }

}
