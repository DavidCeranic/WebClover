export class Car {
    serviceName: string;
    brand: string;
    model: string;
    year: number;
    pricePerDay: number;
    numOfSeats: number;
    imageUrl: string;
    location: string;
    endLocation: string;


    constructor(serviceName: string, brand: string, model: string, year: number, pricePerDay: number, numOfSeats: number, imageUrl: string, location: string, endLocation: string) {
        this.serviceName = serviceName;
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.pricePerDay = pricePerDay;
        this.numOfSeats = numOfSeats;
        this.imageUrl = imageUrl;
        this.location = location;
        this.endLocation = endLocation;
    }
}
