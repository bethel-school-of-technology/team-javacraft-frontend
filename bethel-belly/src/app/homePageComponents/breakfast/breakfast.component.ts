import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {

  items: Menu[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getBreakfast().subscribe(result=>{
      console.log(result)
      this.items = result;
    });
  }
  sendToCart(){
    this.menuService.postMenuItem('Breakfast Food','Food that is Breakfast', '10.99').subscribe((result: any)=>{
      console.log(result)
      this.items = result;
      alert('Item added to your cart!');
    });
  }
}
