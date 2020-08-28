import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { AllFligtsDetailsService } from 'src/app/services/allFligts/all-flights-details/all-flights-details.service';
import { AvioCompanyDetailsService } from 'src/app/services/avioCompany/avio-company-details/avio-company-details.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { AboutCompany } from 'src/app/entities/aboutCompany/about-company';

@Component({
  selector: 'app-edit-company-profile',
  templateUrl: './edit-company-profile.component.html',
  styleUrls: ['./edit-company-profile.component.css']
})
export class EditCompanyProfileComponent implements OnInit {
  addComapny : FormGroup
  // addFlight : FormGroup
  id:number;
  id2:number=100;
  ispis:string="issssspis";
  companyData:AboutCompany;
  constructor(public service: AvioCompanyDetailsService,private router: Router,public route: ActivatedRoute,public companyService: AvioCompanyDetailsService ) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['compID'];
        this.id2=params['flightID']
        console.log(this.id);
        //this.data.refreshList();
      //  this.iddd=this.id;
        this.companyService.getAvioCompanyById(this.id).toPromise().then(
          dataV => {
          this.companyData = dataV;
        //    console.log(this.rentService);
          }
        )
      }
    )


    this.resetForm();
  }

  onSubmit(form: NgForm){
    this.service.postCompanyDetails(form.value).subscribe(
      res => {
        this.resetForm(form);
      },
      err => {
        console.log(err);
      }
    )
    
  }
  onClear() {
    this.addComapny.reset();
  }

  getFieldValue(filterFieldId: string) {
    return (<HTMLInputElement> document.getElementById(filterFieldId)).value;
  }


  resetForm(form?: NgForm){
    if(form!=null)
      form.resetForm();
      this.service.formData = {
        avioCompID:0,
        avioCompName:"this.companyData.avioCompName",
        avioCompAddress:"",
        avioCompAbout:this.ispis,
        avioCompDestinations:"",
        avioCompFastReservationDiscount:"",
        avioCompSeats:"",
        avioCompPrices:"",
        companyFlights:null
        
      }
      
  }
}


