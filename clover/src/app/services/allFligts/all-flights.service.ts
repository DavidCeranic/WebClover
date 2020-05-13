import { Injectable } from '@angular/core';
import {FlightInfo} from 'src/app/entities/flightInfo/flight-info'
import { AbstractFilterParam } from 'src/app/entities/abstract-filter-param/abstract-filter-param';
import { StringFilterParam } from 'src/app/entities/string-filter-param/string-filter-param';
import { NumberFilterParam } from 'src/app/entities/number-filter-param/number-filter-param';

@Injectable({
  providedIn: 'root'
})
export class AllFlightsService {

  constructor() { }
  getFlights() {
    return this.mockedFlights();
  }

  searchFligts(allFlightss : FlightInfo[],filterParams: AbstractFilterParam[]): FlightInfo[]{
    let searchedFlights = new Array<FlightInfo>();
    for(const flight of allFlightss){
      let addFlight = true;
      for(const filterParam of filterParams){
        if(this.checkFlyingFrom(flight,filterParam)){
          addFlight=false;
          break;
        }

       
      }
      if(addFlight)
        searchedFlights.push(flight);
    }
    return searchedFlights;
  }

  checkFlyingFrom(flight: FlightInfo, filterParam: AbstractFilterParam): boolean {
    return filterParam instanceof StringFilterParam && filterParam.getFilterParamName() === 'searchFromFilter' && !flight.from.toLowerCase().includes(filterParam.getFilterParamValue().toLowerCase());
  }

  checkFlyingTo(flight: FlightInfo, filterParam: AbstractFilterParam): boolean {
    return filterParam instanceof StringFilterParam && filterParam.getFilterParamName() === 'flyingTo' && !flight.to.toLowerCase().includes(filterParam.getFilterParamValue().toLowerCase());
  }

 





  mockedFlights(): Array<FlightInfo>{
    let allFlightss = new Array<FlightInfo>();
    
    const c1 = new FlightInfo("Belgrade","Wienna", new Date(2020, 2, 2,13,43),new Date(2020, 2, 33),"e",0,"2h","Wizzair",140);
    const c2 = new FlightInfo("Belgrade","Prag", new Date(2020, 4, 2),new Date(2020, 2, 13),"e",0,"2h","Rayanair",330);
    const c3 = new FlightInfo("Belgrade","Paris", new Date(2020, 6, 2),new Date(2020, 2, 12),"e",0,"2h","Wizzair",10);
    const c4 = new FlightInfo("Madrid","Bali", new Date(2020, 7, 2),new Date(2020, 2, 5),"e",0,"2h","AirSerbia",340);
    const c5 = new FlightInfo("Minhen","Oslo", new Date(2020, 4, 8),new Date(2020, 2, 5),"e",0,"2h","QutarAir",230);

    allFlightss.push(c1);
    allFlightss.push(c2);
    allFlightss.push(c3);
    allFlightss.push(c4);
    allFlightss.push(c5);

    return allFlightss;

}
}
