import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {

  items: Menu[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getAllItems().subscribe(result=>{
      console.log(result)
      this.items = result;
    });
  }

  // sendToCart(){
  //   this.menuService.postMenuItem('test','test','test').subscribe((result: any)=>{
  //     console.log(result)
  //     this.items = result;
  //   });
  // }
}
