import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.css']
})
export class CarFilterComponent implements OnInit {

  @Input() filtredCars;

  constructor() { }

  ngOnInit(): void {
  }

}
