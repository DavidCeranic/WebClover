export class User {
    UserId: string;
    Name: string;
    email: string;
    password: string;
    city: string;
    phoneNumber: string;
    userType: string
    StringToken: string;

    constructor(name: string, email: string, password: string, city: string, phoneNumber: string, userType: string,  token: string) {
        this.Name = name;
        this.email = email;
        this.password = password;
        this.city = city;
        this.phoneNumber = phoneNumber;
        this.userType = userType;
        this.StringToken = token;
    }
}
