import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { AllFligtsDetailsService } from 'src/app/services/allFligts/all-flights-details/all-flights-details.service'
import { ActivatedRoute, Params } from '@angular/router';
import { FlightInfo } from 'src/app/entities/flightInfo/flight-info';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {
  addFlight : FormGroup
  id:number;
  flightData: FlightInfo;
  constructor(public service:AllFligtsDetailsService,public route: ActivatedRoute,public flightService :AllFligtsDetailsService) { }

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
   // this.service.formData.price = 999;
    //this.resetForm();
  }

  onSubmit(form: NgForm){
    // this.service.postFlightDetails(form.value,).subscribe(
    //   res => {
    //     this.resetForm(form);
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // )
   
    
  }
  onClear() {
    this.addFlight.reset();
  }

  getFieldValue(filterFieldId: string) {
    return (<HTMLInputElement> document.getElementById(filterFieldId)).value;
  }


  resetForm(form?: NgForm){
    if(form!=null)
      form.resetForm();
      this.service.formData = {
        flightID:0,
        from:"",
        to:"",
        departing:"",
        returning:"",
        classf:"",
        baggage:"",
        stops:0,
        duration:"",
        companyName:"",
        price:0,
        seatsNumber:0,
        rateFlight:0,
        userDetailUserId:0,
        companyAboutAvioCompID:0,
        seatsList:null
        
        
      }
    }
}
