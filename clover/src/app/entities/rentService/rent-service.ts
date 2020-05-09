export class RentService {
    serviceName: string;
    location: string;


    constructor(serviceName: string, location: string) {
        this.serviceName = serviceName;
        this.location = location;
    }
}