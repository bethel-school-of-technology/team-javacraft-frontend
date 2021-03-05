import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menuItem';
import { MenuService } from '../../services/menu-service.service';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {
  menuItems: MenuItem[] = [];
  dataService: MenuService;

  constructor(private menuService: MenuService) { 
    this.dataService = menuService;
  }

  ngOnInit() {
    this.dataService.getMenu().subscribe(menuItems => this.menuItems = menuItems)
  }

}