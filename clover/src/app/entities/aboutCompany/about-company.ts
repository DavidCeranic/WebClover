export class AboutCompany {
    avioCompName: string;
    avioCompAddress: string;
    avioCompAbout:string;
    avioCompDestinations:string;
   // avioCompFlights:List<string>;
    avioCompFastReservationDiscount:string;
    avioCompSeats:string;
    avioCompPrices:number;

    constructor(avioCompName:string,avioCompAddress:string,avioCompAbout:string,avioCompDestinations:string,avioCompFastReservationDiscount: string,avioCompSeats:string,avioCompPrices: number){
        this.avioCompName= avioCompName;
        this. avioCompAddress= avioCompAddress;
        this.avioCompAbout = avioCompAbout;
        this.avioCompDestinations = avioCompDestinations;
        this.avioCompFastReservationDiscount= avioCompFastReservationDiscount;
        this.avioCompSeats= avioCompSeats;
        this.avioCompPrices=avioCompPrices;
    }

}

