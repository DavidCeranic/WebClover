import { Component, OnInit } from '@angular/core';
import { RentServiceDetailsService } from 'src/app/services/rentServices/rentServiceDetails/rent-service-details.service';
import { RentService } from 'src/app/entities/rentService/rent-service';
import { Car } from 'src/app/entities/Car/car';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlightInfo } from 'src/app/entities/flightInfo/flight-info';
import { AllFligtsDetailsService } from 'src/app/services/allFligts/all-flights-details/all-flights-details.service';
import { User } from 'src/app/entities/User/user';
import { UserDetailsService } from 'src/app/services/userDetails/user-details.service';
import { ReservationDetailsService } from 'src/app/services/reservationDetails/reservation-details.service';
import { Reservation } from 'src/app/entities/reservation/reservation';
import { CarDetailsService } from 'src/app/services/car/carDetails/car-details.service';

@Component({
  selector: 'app-fast-rent-car',
  templateUrl: './fast-rent-car.component.html',
  styleUrls: ['./fast-rent-car.component.css']
})
export class FastRentCarComponent implements OnInit {
  rentService: RentService;
  allCars: Array<Car>;
  id:number;
  flightData:FlightInfo;
  idRent: number;
  userId: number;
  user: User;
  totalPrice: number;
  days: number;

  constructor(private rentServiceDetails: RentServiceDetailsService, public router: Router, public route: ActivatedRoute,public flightService :AllFligtsDetailsService, public userService: UserDetailsService, public reservationService: ReservationDetailsService, public service: CarDetailsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['flightID'];
        console.log(this.id);
        //this.data.refreshList();
        this.flightService.getFlightById(this.id).toPromise().then(
          dataV => {
          this.flightData = dataV;
          }
        )
      }
    )

    this.service.getCarById(1).subscribe(
      dataV => {
        this.reservationService.getReservationForCar(1);
      }
    )

    this.rentServiceDetails.getRentServiceById(1).subscribe(
      dataV => {
        this.rentService = dataV;
        this.allCars = this.rentService.serviceCars;
      }
    )

   this.userId=JSON.parse(localStorage.getItem("regId"));
   this.userService.getUserById(this.userId).toPromise().then(
    dataV=> {
      this.user=dataV;
     }
   )
  }


  onRent(car: Car){
    var startDate = new Date(this.flightData.departing);
    var endDate = new Date(this.flightData.returning);

    

    if (this.checkDate(startDate, endDate)) {
      var reservation = new Reservation(startDate, endDate, car, this.user, null, null);
      this.insertReservation(reservation);
      
      this.days = this.calculatePrice(startDate, endDate);
      this.totalPrice = car.pricePerDay * this.days;
      alert("Uspesno ste rezervisali. Ukupna cena je: "+this.totalPrice);
      this.router.navigateByUrl('/register-user');
    }
  }

  insertReservation(reservation: Reservation) {
    this.reservationService.postReservation(reservation);
  }



  checkDate(startDate: Date, endDate: Date): boolean {
    if (endDate < startDate) {
      alert('Starting date must be lower then ending date.');
      return false;
    }

    var start1 = new Date(startDate);
    var end1 = new Date(endDate);
    var now = new Date();
    if (start1 < now || end1 < now) {
      alert("ne moze u proslisti ");
      return false;
    }

    for (let i = 0; i < this.reservationService.list.length; i++) {
      var element = this.reservationService.list[i];
      console.log(this.reservationService.list);

      var start2 = new Date(element.startDate);
      var end2 = new Date(element.endDate);

      var start1 = new Date(startDate);
      var end1 = new Date(endDate);

      var r1 = end1.setHours(0, 0) - start2.setHours(0, 0);
      var r2 = end2.setHours(0, 0) - start1.setHours(0, 0);

      if (r1 >= 0 && r2 >= 0) {
        alert('Selected span of dates is already taken.');
        return false;
      }
    }
    return true;
  }

  calculatePrice(startDate, endDate) : number{
    let days = new Array<Date>();
    let start = new Date(startDate);
    let end = new Date(endDate);
    let daysNum = (end.setHours(0, 0).valueOf() - start.setHours(0,0).valueOf())/86400000;

    for (let i = 0; i < daysNum; i++) {
      let date = new Date();
      date.setDate(start.getDate() + i);
      days.push(date);
    }
    
    return days.length;
  }
}
