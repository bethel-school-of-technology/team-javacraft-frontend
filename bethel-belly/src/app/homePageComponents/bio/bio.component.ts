import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  constructor() {

  }
  myFunction() {
    alert("I am an alert box!");
  }
  ngOnInit(): void {}

}
