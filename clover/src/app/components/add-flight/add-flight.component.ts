import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { AllFligtsDetailsService } from 'src/app/services/allFligts/all-flights-details/all-flights-details.service'

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {
  addFlight : FormGroup
  constructor(public service:AllFligtsDetailsService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  onSubmit(form: NgForm){
    this.service.postFlightDetails(form.value).subscribe(
      res => {
        this.resetForm(form);
      },
      err => {
        console.log(err);
      }
    )
    
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
        price:0
        
      }
    }
}
