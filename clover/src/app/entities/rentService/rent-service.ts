import { Car } from '../Car/car';

export class RentService {
    serviceId: string;
    serviceName: string;
    location: string;
    img: string;
    description: string;
    about: string;
    cars: Array<Car>;
    locationMap: string;
    contact: string;
    lat: number;
    lng: number;

    constructor(serviceName: string, location: string, description: string, img: string, about: string, cars: Array<Car>, contact: string, lat: number, lng: number) {
        this.serviceName = serviceName;
        this.location = location;
        this.img = img;
        this.description = description;
        this.about = about;
        this.contact = contact;
        this.lat = lat;
        this.lng = lng;
    }
}