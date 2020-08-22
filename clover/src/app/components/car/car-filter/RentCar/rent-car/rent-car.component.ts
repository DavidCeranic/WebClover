import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormBuilder } from '@angular/forms';
import { Car } from 'src/app/entities/Car/car';
import { CarDetailsService } from 'src/app/services/car/carDetails/car-details.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RentService } from 'src/app/entities/rentService/rent-service';
import { RentServiceDetailsService } from 'src/app/services/rentServices/rentServiceDetails/rent-service-details.service';
import { User } from 'src/app/entities/User/user';
import { UserDetailsService } from 'src/app/services/userDetails/user-details.service';
import { ReservationDetailsService } from 'src/app/services/reservationDetails/reservation-details.service';

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent implements OnInit {
  car: Car;
  NumOfDays: number;
  idCar: number;
  idRent: number;
  idUser: number;
  rentService: RentService;
  user: User;

  constructor(public reservationService: ReservationDetailsService, public service: CarDetailsService, private formBuilder: FormBuilder, public route: ActivatedRoute, public rentServiceServis: RentServiceDetailsService, public userService: UserDetailsService) { }

  ngOnInit(): void {
    this.resetForm();

    this.route.params.subscribe(
      (params: Params) => {
        this.idRent = params['id'];
        this.rentServiceServis.getRentServiceById(this.idRent).subscribe(
          dataV => {
            this.rentService = dataV;
          }
        )
      }
    )

    this.route.params.subscribe(
      (params: Params) => {
        this.idCar = params['carid'];
        this.service.getCarById(this.idCar).subscribe(
          dataV => {
            this.car = dataV;
          }
        )
      }
    )

    this.idUser = JSON.parse(localStorage.getItem("regId"));
    this.userService.getUserById(this.idUser).subscribe(
      dataV =>{
        this.user = dataV;
      }
    )
  }

  onSubmit(form: NgForm){
    this.insertReservation(form);
  }

  insertReservation(form: NgForm){
    console.log(form.value);
    this.reservationService.postReservation(form.value).subscribe(
      res => {
        this.resetForm(form);
        this.reservationService.refreshList();
      }
    )
  }

  resetForm(form?: NgForm){
    if(form!=null)
      form.resetForm();
      this.reservationService.formData = {
        reservationId: null,
        startDate: null,
        endDate: null,
        car: null,
        user: null,
        //startOffice: null
      }
  }
}
