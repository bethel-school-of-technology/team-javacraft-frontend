import { cartUrl } from './../config/api';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../models/menu';

import { itemsUrl } from 'src/app/config/api';



@Injectable({
  providedIn: 'root'
})
export class MenuService {

  // private baseUrl: string = "http://localhost:3000/"
  // private itemsUrl: string = "http://localhost:3000/items/"
  private breakfastUrl: string = "http://localhost:3000/items/breakfast/"
  private lunchUrl: string = "http://localhost:3000/items/lunch"
  private dinnerUrl: string = "http://localhost:3000/items/dinner"
  private dessertUrl: string = "http://localhost:3000/items/dessert"


  constructor(private http: HttpClient) { }

  getAllItems(): Observable<Menu[]>{
    return this.http.get<Menu[]>(itemsUrl);
  };
  getBreakfast(): Observable<Menu[]>{
    return this.http.get<Menu[]>(this.breakfastUrl)
  };
  getLunch(): Observable<Menu[]>{
    return this.http.get<Menu[]>(this.lunchUrl)
  };
  getDinner(): Observable<Menu[]>{
    return this.http.get<Menu[]>(this.dinnerUrl)
  };
  getDessert(): Observable<Menu[]>{
    return this.http.get<Menu[]>(this.dessertUrl)
  };
  postBreakfast(name:string, description:string, price:string) {
    return this.http.post(cartUrl,{name,description,price})
  };
}
