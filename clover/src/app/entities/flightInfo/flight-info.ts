import { Time } from '@angular/common';

export class FlightInfo {
from:string;
to:string;
departing:Date;
returning:Date;
classf:string;
time1:string;
time2:string;
stops:number;
duration:string;
companyName:string;
price:number;

constructor(from:string, to:string,departing:Date,returning:Date,classf:string,time1:string,time2:string,stops:number,duration:string,companyName:string,price:number){
    this.from=from;
    this.to=to;
    this.departing=departing;
    this.returning=returning;
    this.classf=classf;
    this.time1=time1;
    this.time2=time2;
    this.stops=stops;
    this.duration=duration;
    this.companyName=companyName;
    this.price=price;
}
}
