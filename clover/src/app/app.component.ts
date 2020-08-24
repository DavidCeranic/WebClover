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

  ngOnInit(): void {
    
  }

  constructor(public router: Router){
    
  }
  

  IsSignedIn():boolean{
    return !!localStorage.getItem('regId');
  }
  LogOut(){
    localStorage.clear();
    this.router.navigateByUrl("/");
  }
}
