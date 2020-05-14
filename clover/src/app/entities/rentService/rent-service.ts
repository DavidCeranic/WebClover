import { Car } from '../Car/car';

export class RentService {
    serviceName: string;
    location: string;
    img: string;
    description: string;
    about: string;
    cars: Array<Car>;
    locationMap: string;
    contact: string;

    constructor(serviceName: string, location: string, description: string, img: string, about: string, cars: Array<Car>, contact: string) {
        this.serviceName = serviceName;
        this.location = location;
        this.img = img;
        this.description = description;
        this.about = about;
        this.contact = contact;
    }
}