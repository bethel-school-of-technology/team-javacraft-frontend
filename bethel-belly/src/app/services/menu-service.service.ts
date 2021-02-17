import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menuItem';
import { Observable, of } from 'rxjs'


@Injectable({
  providedIn: 'root'
})

export class MenuService {
  menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Cheeseburger",
      description: [
        " American Cheese",
        " Lettuce",
        " Tomato",
        " Onion"
      ]
    },
    {
      id: 2,
      name: "Baked Spaghetti",
      description: [
        " Noodles",
        " Tomato Sauce",
        " Meatballs",
        " Mozzerella Cheese"
      ]
    },
    {
      id: 3,
      name: "Pepperoni Pizza",
      description: [
        " Sourdough Crust",
        " Marinara Sauce",
        " Mozzerella Cheese",
        " Pepperoni"
      ]
    }
  ]
  static menuItems: any;
  constructor() { }

  getMenu = (): Observable<MenuItem[]> => {
    return of(this.menuItems);
  }
}
