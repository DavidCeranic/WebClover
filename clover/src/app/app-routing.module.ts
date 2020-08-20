import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { SingUpComponent } from './components/sing-in/sing-up/sing-up.component';
import { CarComponent } from './components/car/car.component';
import { UserGuard } from './guards/user/user.guard';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { FlightsComponent } from './components/flights/flights.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { RentACarComponent } from './components/car/rent-a-car/rent-a-car.component';
import { BookAFlightComponent } from './components/book-a-flight/book-a-flight.component';
import { PomocnaComponent } from './components/pomocna/pomocna.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AddRentACarComponent } from './components/car/add-rent-a-car/add-rent-a-car.component';
import { AdminGuard } from './guards/admin/admin.guard';
import { AddCarComponent } from './components/car/add-car/add-car.component';
import { AddAboutCompanyComponent } from './components/add-about-company/add-about-company.component';
import { AddFlightComponent } from './components/add-flight/add-flight.component';
import { AdminInfoComponent } from './components/car/rent-a-car-filter/admin-info/admin-info.component';
import { AboutRentComponent } from './components/car/rent-a-car/about-rent/about-rent/about-rent.component';
import { CarsRentComponent } from './components/car/rent-a-car/cars-rent/cars-rent/cars-rent.component';
import { LocationsRentComponent } from './components/car/rent-a-car/locations-rent/locations-rent/locations-rent.component';

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
  //  component:FlightsComponent,
    children:[{path:"",component:FlightsComponent,canActivate:[UserGuard] },
      {path:'company-profile/:id',component:CompanyProfileComponent},
    {path:'payment',component:PaymentComponent}
  ]
   
  },
  {
    path: "sing-up",
    component: SingUpComponent
  },
  {
    path: "car",
    children: [
      {path: "", component: CarComponent, canActivate: [UserGuard]},
        {path: "rent-a-car",
        children: [
          {path: "", component: RentACarComponent},
          {path: "about", component: AboutRentComponent},
          {path: "cars", component: CarsRentComponent},
          {path: "locations", component: LocationsRentComponent}
        ]},
      {path: "add-rent-a-car", component: AddRentACarComponent, canActivate: [AdminGuard]},
      {path: "add-car", component: AddCarComponent, canActivate: [AdminGuard]}
    ]
  },
  {
    path: "register-user",
    component: RegisterUserComponent

  },
  
 
  {
    path:"book-a-flight",
    component: BookAFlightComponent
  },
  {
    path:"pomocna",
    component:PomocnaComponent
  },
  {
    path:"payment",
    component:PaymentComponent
  },
  {
    path:"add-about-company",
    component:AddAboutCompanyComponent
  },{
    path:"add-flight",
    component:AddFlightComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
