import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.css']
})
export class DinnerComponent implements OnInit {

  items: Menu[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getDinner().subscribe(result=>{
      console.log(result)
      this.items = result;
    });
  }

  sendToCart(){
    this.menuService.postMenuItem('Dinner Food','Food that is Breakfast', '10.99').subscribe((result: any)=>{
      console.log(result)
      this.items = result;
    });
  }
}
