export class User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    gener: string;

    constructor(firstName: string, lastName: string, email: string, password: string, gener: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.gener = gener;
    }
}
