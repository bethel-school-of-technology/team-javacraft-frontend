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
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
