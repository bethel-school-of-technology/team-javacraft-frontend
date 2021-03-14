import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../models/menu';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private baseUrl: string = "http://localhost:3000/items/"

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<Menu[]>{
    return this.http.get<Menu[]>(this.baseUrl);
  }
}
