import { Injectable } from '@angular/core';
import {FlightInfo} from 'src/app/entities/flightInfo/flight-info'
@Injectable({
  providedIn: 'root'
})
export class AllFlightsService {

  constructor() { }
  getFlights() {
    return this.mockedFlights();
  }

  mockedFlights(): Array<FlightInfo>{
    let allFlightss = new Array<FlightInfo>();
    
    const c1 = new FlightInfo("Belgrade","Wienna", new Date(2020, 2, 2),new Date(2020, 2, 33),"e","22:22h","24:22h",0,"2h","Wizzair",140);
  const c2 = new FlightInfo("Belgrade","Prag", new Date(2020, 4, 2),new Date(2020, 2, 13),"e","22:22h","24:22h",0,"2h","Rayanair",140);
    const c3 = new FlightInfo("Belgrade","Paris", new Date(2020, 6, 2),new Date(2020, 2, 12),"e","22:22h","24:22h",0,"2h","Wizzair",140);
    const c4 = new FlightInfo("Belgrade","Bali", new Date(2020, 7, 2),new Date(2020, 2, 5),"e","22:22h","24:22h",0,"2h","Wizzair",140);
    const c5 = new FlightInfo("Belgrade","Oslo", new Date(2020, 4, 8),new Date(2020, 2, 5),"e","22:22h","24:22h",0,"2h","Wizzair",140);

    allFlightss.push(c1);
    allFlightss.push(c2);
    allFlightss.push(c3);
    allFlightss.push(c4);
    allFlightss.push(c5);

    return allFlightss;

}
}
