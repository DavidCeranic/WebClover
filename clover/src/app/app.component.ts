import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clover';
  emaill:string;
  constructor(public router: Router){
    
  }
  

  IsSignedIn():boolean{
    return !!localStorage.getItem('userEmail');
  }
  LogOut(){
    localStorage.clear();
    this.router.navigateByUrl("/");
  }
}
