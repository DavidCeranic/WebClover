import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { SingUpComponent } from './components/sing-in/sing-up/sing-up.component';
import { CarComponent } from './components/car/car.component';
import { UserGuard } from './guards/user.guard';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { FlightsComponent } from './components/flights/flights.component';


const routes: Routes = [
  {
    path: "",
    component: SingInComponent
  },
  {
    path: "sing-in",
    component: SingInComponent
  },
  {
    path: "flights",
    component: FlightsComponent
  },
  {
    path: "sing-up",
    component: SingUpComponent
  },
  {
    path: "car",
    component: CarComponent,
    canActivate: [UserGuard]
  },
  {
    path: "register-user",
    component: RegisterUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
