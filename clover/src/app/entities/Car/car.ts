export class Car {
    carId: string;
    serviceName: string;
    brand: string;
    model: string;
    year: number;
    pricePerDay: number;
    numOfSeats: number;
    imgUrl: string;
    location: string;
    endLocation: string;
    typeOfCar: string;
    rate: string;


    constructor(serviceName: string, brand: string, model: string, year: number, pricePerDay: number, numOfSeats: number, imgUrl: string, location: string, endLocation: string, typeOfCar: string, rate: string) {
        this.serviceName = serviceName;
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.pricePerDay = pricePerDay;
        this.numOfSeats = numOfSeats;
        this.imgUrl = imgUrl;
        this.location = location;
        this.endLocation = endLocation;
        this.typeOfCar = typeOfCar;
        this.rate = rate;
    }
}
