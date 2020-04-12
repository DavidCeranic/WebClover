export class AboutCompany {
    name: string;
    address: string;
    about:string;
    destinations:string;
    flights:string;
    //ovde fale stvari?

    constructor(name:string,address:string,about:string,destinations:string,flights: string){
        this.name =name;
        this.address=address;
        this.about=about;
        this.destinations=destinations;
        this.flights= flights;
    }

}

