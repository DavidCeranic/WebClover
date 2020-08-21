import { Time } from '@angular/common';

export class FlightInfo {
flightID:number;
from:string;
to:string;
departing:string;
returning:string;
classf:string;
baggage : string;
stops:number;
duration:string;
companyName:string;
price:number;
seatsNumber:number;
rateFlight:number;
companyAboutAvioCompID: number;
userDetailUserId: number;

constructor(from:string, to:string,departing:string,returning:string,classf:string,stops:number,duration:string,companyName:string,price:number,seatsNumber:number,
    rateFlight:number){
    this.from=from;
    this.to=to;
    this.departing=departing;
    this.returning=returning;
    this.classf=classf;

    this.stops=stops;
    this.duration=duration;
    this.companyName=companyName;
    this.price=price;
    this.seatsNumber=seatsNumber;
    
}
}
