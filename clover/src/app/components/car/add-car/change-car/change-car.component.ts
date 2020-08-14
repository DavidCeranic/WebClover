import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Car } from 'src/app/entities/Car/car';
import { CarDetailsService } from 'src/app/services/car/carDetails/car-details.service';
import { ToastrService } from 'ngx-toastr';
import { RentServiceDetailsService } from 'src/app/services/rentServices/rentServiceDetails/rent-service-details.service';

@Component({
  selector: 'app-change-car',
  templateUrl: './change-car.component.html',
  styleUrls: ['./change-car.component.css']
})
export class ChangeCarComponent implements OnInit {
  addCarForm: FormGroup;
  car: Car;

  constructor(public service: CarDetailsService, private toastr: ToastrService, public rentService: RentServiceDetailsService) { }

  ngOnInit(): void {
    this.resetForm();
    this.service.currentMessage.subscribe(car => this.car = car);
  }

  onSubmit(form: NgForm){
    this.updateCar(form);
  }

  updateCar(form: NgForm){
    this.service.putCar(form.value, this.car.carId).subscribe(
      res => {
        console.log(form.value);
        console.log(this.car.carId);
        this.toastr.success("Updated Successfully");
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        this.toastr.error('error');
      }
    )
  }

  onClear() {
    this.addCarForm.reset();
  }

  getFieldValue(filterFieldId: string) {
    return (<HTMLInputElement> document.getElementById(filterFieldId)).value;
  }

  resetForm(form?: NgForm){
    if(form!=null)
      form.resetForm();
      this.service.formData = {
        carId: null,
        serviceName: "",
        brand: "",
        model: "",
        year: 0,
        pricePerDay: 0,
        numOfSeats: 0,
        imgUrl: "",
        location: "",
        endLocation: "",
        typeOfCar: "",
        rate: "",
        RentServiceServiceId: 0
      }
  }

}
