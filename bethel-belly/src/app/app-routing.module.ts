import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartComponent } from './homePageComponents/cart/cart.component';
import { LocationComponent } from '../app/homePageComponents/location/location.component';
import { MenuItemsComponent } from './homePageComponents/menu-items/menu-items.component';
import { HomeComponent } from '../app/homePageComponents/home/home.component';
import { ReservationsComponent } from './homePageComponents/reservations/reservations.component';
import { BioComponent } from './homePageComponents/bio/bio.component';
import { ReviewsPageComponent } from './homePageComponents/reviews-page/reviews-page.component';
import { TannerComponent } from './homePageComponents/tanner/tanner.component';
import { JdComponent } from './homePageComponents/jd/jd.component';
import { JonComponent } from './homePageComponents/jon/jon.component';
import { LoginComponent } from './homePageComponents/login/login.component';
import { BreakfastComponent } from './homePageComponents/breakfast/breakfast.component'
import { LunchComponent } from './homePageComponents/lunch/lunch.component';
import { DinnerComponent } from './homePageComponents/dinner/dinner.component';
import { DessertComponent } from './homePageComponents/dessert/dessert.component';
import { PostBreakfastComponent } from './postComponents/post-breakfast/post-breakfast.component';

const routes: Routes = [
  { path: "", redirectTo:"home", pathMatch: "full"},
  { path: "home", component: HomeComponent },
  { path: "menu", component: MenuItemsComponent },
  { path: "about", component: BioComponent },
  { path: "reviews", component: ReviewsPageComponent },
  { path: "location", component: LocationComponent },
  { path: "reservations", component: ReservationsComponent },
  { path: "cart", component: CartComponent },
  { path: "tanner", component: TannerComponent },
  { path: "jd", component: JdComponent },
  { path: "jon", component: JonComponent },
  { path: "login", component: LoginComponent },
  { path: "menu/breakfast", component: BreakfastComponent },
  { path: "menu/lunch", component: LunchComponent },
  { path: "menu/dinner", component: DinnerComponent },
  { path: "menu/dessert", component: DessertComponent },
  { path: "menu/post", component: PostBreakfastComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
