import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import {AboutCompany} from "src/app/entities/aboutCompany/about-company"
@Injectable({
  providedIn: 'root'
})
export class AvioCompanyDetailsService {

  formData: AboutCompany;
  readonly rootUrl= 'http://localhost:5000/api/';
  list: AboutCompany[];



  private messageSource = new BehaviorSubject<AboutCompany>(null);
  currentMessage = this.messageSource.asObservable();

  constructor(private http:HttpClient) { }

  postCompanyDetails(formData: AboutCompany){
    return this.http.post(this.rootUrl + 'CompanyAbouts', formData);
  }

  refreshList(){
    this.http.get(this.rootUrl + 'CompanyAbouts').toPromise().then(res => this.list = res as AboutCompany[]);
  }

  changeMessage(message: AboutCompany){
    this.messageSource.next(message);
  }
  
}
