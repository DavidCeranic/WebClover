import { PipeTransform, Pipe } from '@angular/core';
import { FlightInfo } from 'src/app/entities/flightInfo/flight-info';
import { User } from 'src/app/entities/User/user';


@Pipe({
    name:'users'
})
export class UsersPipe implements PipeTransform{
    transform(rUser:User[], searchFriend:string):User[] {
      

        if(!rUser || !searchFriend ){
            return rUser;
        }
        return rUser.filter(rUser => rUser.name.toLocaleLowerCase().indexOf(searchFriend.toLocaleLowerCase()) !==-1);
    }
}