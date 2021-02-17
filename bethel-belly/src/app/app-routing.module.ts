import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LocationComponent } from './location/location.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", redirectTo:"home", pathMatch: "full"},
  { path: "home", component: HomeComponent },
  { path: "menu", component: MenuItemsComponent },
  { path: "about", component: AboutComponent },
  { path: "reviews", component: ReviewsComponent },
  { path: "location", component: LocationComponent },
  { path: "cart", component: CartComponent },
  { path: "checkout", component: CheckoutComponent },

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
