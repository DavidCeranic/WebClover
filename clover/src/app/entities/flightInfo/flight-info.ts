import { Time } from '@angular/common';

export class FlightInfo {
from:string;
to:string;
departing:Date;
returning:Date;
classf:string;

stops:number;
duration:string;
companyName:string;
price:number;

constructor(from:string, to:string,departing:Date,returning:Date,classf:string,stops:number,duration:string,companyName:string,price:number){
    this.from=from;
    this.to=to;
    this.departing=departing;
    this.returning=returning;
    this.classf=classf;

    this.stops=stops;
    this.duration=duration;
    this.companyName=companyName;
    this.price=price;
}
}
