export class User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    city: string;
    phoneNumber: string;

    constructor(firstName: string, lastName: string, email: string, password: string, city: string, phoneNumber: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.city = city;
        this.phoneNumber = phoneNumber;
    }
}
