import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menuItem';
import { Observable, of } from 'rxjs'
// import { CartService } from '../cart.service';

@Injectable({
  providedIn: 'root'
})

export class MenuServiceService {
  menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Cheeseburger",
      description: [
        " American Cheese",
        " Lettuce",
        " Tomato",
        " Onion"
      ],
      price: 10.99
    },
    {
      id: 2,
      name: "Baked Spaghetti",
      description: [
        " Noodles",
        " Tomato Sauce",
        " Meatballs",
        " Mozzerella Cheese"
      ],
      price: 8.99
    },
    {
      id: 3,
      name: "Pepperoni Pizza",
      description: [
        " Sourdough Crust",
        " Marinara Sauce",
        " Mozzerella Cheese",
        " Pepperoni"
      ],
      price: 4.99
    }
  ]
  static menuItems: any;
  constructor() { }

  getMenu = (): Observable<MenuItem[]> => {
    return of(this.menuItems);
  }
}
