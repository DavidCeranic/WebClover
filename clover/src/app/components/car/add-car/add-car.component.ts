import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Car } from 'src/app/entities/Car/car';
import { CarDetailsService } from 'src/app/services/car/carDetails/car-details.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  addCarForm: FormGroup;
  car: Car;

  constructor(public service: CarDetailsService) { }

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
        this.resetForm(form);
      },
      err => {
        console.log(err);
      }
    )
  }

  updateCar(form: NgForm){
    this.service.putCar(form.value).subscribe(
      res => {
        this.resetForm(form);
      },
      err => {
        console.log(err);
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
        rate: ""
      }
  }

}
