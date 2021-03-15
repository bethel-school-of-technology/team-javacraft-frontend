import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Menu[] = [];

  constructor(private menuService: MenuService) { }

  myFunction() {
    alert("ORDER PLACED!");
  }

  ngOnInit(): void {
    this.menuService.getCart().subscribe(result=>{
      console.log(result)
      this.items = result;
    });
  }

}
