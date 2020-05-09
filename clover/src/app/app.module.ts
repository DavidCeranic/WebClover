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
