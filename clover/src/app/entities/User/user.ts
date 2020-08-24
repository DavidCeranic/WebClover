import { Friends } from '../Friends/friends';

export class User {
    userId: string;
    name: string;
    email: string;
    password: string;
    city: string;
    phoneNumber: string;
    UserType: string
    StringToken: string;
    userFriends: Array<Friends>;

    constructor(name: string, email: string, password: string, city: string, phoneNumber: string, UserType: string,  token: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.city = city;
        this.phoneNumber = phoneNumber;
        this.UserType = UserType;
        this.StringToken = token;
    }
}
