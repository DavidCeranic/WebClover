import { Component, OnInit, Input } from '@angular/core';
import { MatDialogModule } from "@angular/material/dialog";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { RentCarComponent } from './RentCar/rent-car/rent-car.component';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.css']
})
export class CarFilterComponent implements OnInit {

  @Input() filtredCars;
  

  constructor(){}//public dialog: MatDialog

  ngOnInit(): void {
  }

  onCreate(){
    //this.dialog.open(RentCarComponent);
  }
}
