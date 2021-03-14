import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-post-breakfast',
  templateUrl: './post-breakfast.component.html',
  styleUrls: ['./post-breakfast.component.css']
})
export class PostBreakfastComponent {

  items: Menu[] = [];

  constructor(private menuService: MenuService) { }


createNewBreakfast(){
  this.menuService.postBreakfast('test','test','test').subscribe((result: any)=>{
    console.log(result)
    this.items = result;
  });
}
}