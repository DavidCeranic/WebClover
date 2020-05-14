import { Injectable } from '@angular/core';
import {AboutCompany} from "src/app/entities/aboutCompany/about-company"

@Injectable({
  providedIn: 'root'
})
export class AvioCompanyService {


  constructor() { }
  loadAllAvioCompanies() {
    return this.mockedAvioCompany();
  }

  mockedAvioCompany(){
    let allAvioCompanies = new Array<AboutCompany>();

    const c1 = new AboutCompany('Wizzair','Hungary','ABOUT DESC','Bali, Africa','Brze rezervacije',"122",200);
    const c2 = new AboutCompany('Airserbia','Serbia','ABOUT DESC','Thiland, Brazil','Brze rezervacije',"240",300);
    const c3 = new AboutCompany('Rayanair','Irish','ABOUT DESC','China, Maroco','Brze rezervacije',"100",400);

    allAvioCompanies.push(c1,c2,c3);

    return allAvioCompanies;
  }
}
