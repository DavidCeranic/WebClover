import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { SingUpComponent } from './components/sing-in/sing-up/sing-up.component';
import { CarComponent } from './components/car/car.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { FlightsComponent } from './components/flights/flights.component';

import { CompanyProfileComponent } from './components/company-profile/company-profile.component';

import { RentACarComponent } from './components/car/rent-a-car/rent-a-car.component';
import { BookAFlightComponent } from './components/book-a-flight/book-a-flight.component';
import { PomocnaComponent } from './components/pomocna/pomocna.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentACarFilterComponent } from './components/car/rent-a-car-filter/rent-a-car-filter.component';
import { CarFilterComponent } from './components/car/car-filter/car-filter.component';
import { AddRentACarComponent } from './components/car/add-rent-a-car/add-rent-a-car.component';
import { SearchFlightComponent } from './components/flights/search-flight/search-flight.component';
import { AddCarComponent } from './components/car/add-car/add-car.component';



@NgModule({
  declarations: [
    AppComponent,
    SingInComponent,
    SingUpComponent,
    CarComponent,
    RegisterUserComponent,
    FlightsComponent,
    RentACarComponent,
    CompanyProfileComponent,
    BookAFlightComponent,
    PomocnaComponent,
    PaymentComponent,
    RentACarFilterComponent,
    CarFilterComponent,
    AddRentACarComponent,
    SearchFlightComponent,
    AddCarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
