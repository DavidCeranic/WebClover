import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Car } from 'src/app/entities/Car/car';
import { CarDetailsService } from 'src/app/services/car/carDetails/car-details.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  addCarForm: FormGroup;
  car: Car;

  constructor(public service: CarDetailsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
    this.service.currentMessage.subscribe(car => this.car = car);
  }

  onSubmit(form: NgForm){
    if(form.value.carId == null)
      this.insertCar(form);
    else
      this.updateCar(form);
  }

  insertCar(form: NgForm){
    this.service.postCar(form.value).subscribe(
      res => {
        this.toastr.success("Inserted Successfully");
        this.resetForm(form);
      },
      err => {
        this.toastr.error('error');
      }
    )
  }

  updateCar(form: NgForm){
    this.service.putCar(form.value).subscribe(
      res => {
        this.toastr.success("Updated Successfully");
        this.resetForm(form);
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
        isTaken: 0
      }
  }

}
