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
}