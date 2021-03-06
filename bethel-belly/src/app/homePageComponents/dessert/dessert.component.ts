import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.css']
})
export class DessertComponent implements OnInit {

  items: Menu[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getDessert().subscribe(result=>{
      console.log(result)
      this.items = result;
    });
  }

  sendToCart(){
    this.menuService.postMenuItem('Dessert Food','Food that is Dessert', '10.99').subscribe((result: any)=>{
      console.log(result)
      this.items = result;
      alert('Item added to your cart!');
    });
  }
}
