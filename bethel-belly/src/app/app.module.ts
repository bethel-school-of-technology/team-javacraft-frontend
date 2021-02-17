import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { LocationComponent } from './location/location.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { NavComponent } from './nav/nav.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    LocationComponent,
    CartComponent,
    CheckoutComponent,
    MenuItemsComponent,
    NavComponent,
    ReviewsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
