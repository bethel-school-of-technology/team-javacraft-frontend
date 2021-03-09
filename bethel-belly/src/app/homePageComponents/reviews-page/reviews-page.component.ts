import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews-page',
  templateUrl: './reviews-page.component.html',
  styleUrls: ['./reviews-page.component.css']
})
export class ReviewsPageComponent implements OnInit {

  constructor() { }

  myFunction() {
    alert("THANK YOU SO MUCH FOR YOUR REVIEW!");
  }

  ngOnInit(): void {
  }

}
