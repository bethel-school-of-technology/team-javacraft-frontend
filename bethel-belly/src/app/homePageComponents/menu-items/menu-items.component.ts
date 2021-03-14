import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menuItem';
import { MenuService } from '../../services/menu-service.service';
import { ItemService } from '../../services/menu.service';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }
  getMenuItems(name:string,description:string,price:string,category:string) {
    this.itemService.getAllItems(name,description,price,category).subscribe((response:any)=>{
      console.log(response);
    })
  }
}