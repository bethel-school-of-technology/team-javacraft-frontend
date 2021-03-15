import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {

  items: Menu[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getLunch().subscribe(result=>{
      console.log(result)
      this.items = result;
    });
  }
  sendToCart(){
    this.menuService.postMenuItem('Lunch Food','Food that is Lunch', '10.99').subscribe((result: any)=>{
      console.log(result)
      this.items = result;
      alert('Item added to your cart!');
    });
  }
}
