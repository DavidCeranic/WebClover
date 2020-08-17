export class Office {
    officeId: string;
    name: string;
    address: string;
    lat: number;
    lng: number;

    constructor(officeId: string, name: string, address: string, lat: number, lng: number) {
        this.officeId = officeId;
        this.name = name;
        this.address = address;
        this.lat = lat;
        this.lng = lng;
    }
}
