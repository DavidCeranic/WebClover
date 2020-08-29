import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, Form } from '@angular/forms';
import { Car } from 'src/app/entities/Car/car';
import { CarDetailsService } from 'src/app/services/car/carDetails/car-details.service';
import { ToastrService } from 'ngx-toastr';
import { RentServiceDetailsService } from 'src/app/services/rentServices/rentServiceDetails/rent-service-details.service';
import { RentService } from 'src/app/entities/rentService/rent-service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-change-car',
  templateUrl: './change-car.component.html',
  styleUrls: ['./change-car.component.css']
})
export class ChangeCarComponent implements OnInit {
  addCarForm: FormGroup;
  car: Car;
  id: number;
  carId: number;
  rentService: RentService;

  constructor(public service: CarDetailsService, private toastr: ToastrService, public rentServiceServis: RentServiceDetailsService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.resetForm();
    //this.service.currentMessage.subscribe(car => this.car = car);
    
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.rentServiceServis.getRentServiceById(this.id).subscribe(
          dataV => {
            this.rentService = dataV;
          }
        )
      }
    )


    this.route.params.subscribe(
      (params: Params) => {
        this.carId = params['carid'];
        this.service.getCarById(this.carId).subscribe(
          carV => {
            this.car = carV;
          }
        )
      }
    )
  }

  onSubmit(form: NgForm){
    this.updateCar(form);
  }

  updateCar(form: NgForm){
    var car = form.value as Car;

    // for (let i = 0; i < this.rentService.serviceCars.length; i++) {
    //   const element = this.rentService.serviceCars[i];
    //   if(element.model == car.model)
    //     this.rentService.serviceCars[i] = car;
    // }

    this.service.putCar(car, this.carId, this.rentService.serviceId).subscribe(
    // this.rentServiceServis.putRentService(this.rentService, this.rentService.serviceId).subscribe(
      res => {  
        //this.rentService.selectedService.serviceCars.push(form.value);
        //this.rentService.putRentService(this.rentService.selectedService);
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
        //serviceName: "",
        brand: "",
        model: "",
        year: 0,
        pricePerDay: 0,
        numOfSeats: 0,
        imgUrl: "",
        location: "",
        endLocation: "",
        typeOfCar: "",
        rateCar: null,
        RentServiceServiceId: 0,
        sale: false,
        averageRate: 0
      }
  }

}
