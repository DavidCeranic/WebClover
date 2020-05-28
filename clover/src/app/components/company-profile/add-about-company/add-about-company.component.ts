import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { AvioCompanyDetailsService } from 'src/app/services/avioCompany/avio-company-details/avio-company-details.service';


@Component({
  selector: 'app-add-about-company',
  templateUrl: './add-about-company.component.html',
  styleUrls: ['./add-about-company.component.css']
})
export class AddAboutCompanyComponent implements OnInit {
  addComapny : FormGroup
  


  constructor(public service: AvioCompanyDetailsService ) { }

  ngOnInit(): void {
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
        avioCompName:"",
        avioCompAddress:"",
        avioCompAbout:"",
        avioCompDestinations:"",
        avioCompFastReservationDiscount:"",
        avioCompSeats:"",
        avioCompPrices:""
        
      }
      
  }

}
