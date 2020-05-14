import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {

  @Input() searchedFlights;
  constructor() { }

  ngOnInit(): void {
  }

}
