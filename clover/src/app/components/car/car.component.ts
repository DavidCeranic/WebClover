import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Car } from 'src/app/entities/Car/car'
import { CarService } from 'src/app/services/car/car.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  SearchCarForm: FormGroup;
  rentService: string;
  display = false;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.SearchCarForm = new FormGroup({
      'Place': new FormControl('', Validators.required),
      'StartDate': new FormControl('', Validators.required),
      'EndDate': new FormControl('', Validators.required)
    });
  }

  onSubmit() {
  }

  onClick(ServiceName: string) {
    this.rentService = ServiceName;
    this.display = true;
    //this.router.navigate(['/car/rent-a-car'], { relativeTo: this.route});
  }

  Prikaz() : boolean{
    return this.display;
  }
}
