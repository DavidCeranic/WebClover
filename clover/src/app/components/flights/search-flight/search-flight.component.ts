import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {

  @Input() searchedFlights;
  constructor(private router : Router ) { }

  ngOnInit(): void {
  }

  onSelect(){
    this.router.navigateByUrl('/flights/payment');
    //this.data.changeMessage(service);
  }
}
