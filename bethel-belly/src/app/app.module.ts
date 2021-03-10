import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from '../app/homePageComponents/footer/footer.component';
import { HeaderComponent } from '../app/homePageComponents/header/header.component';
import { AboutComponent } from '../app/homePageComponents/about/about.component';
import { LocationComponent } from '../app/homePageComponents/location/location.component';
import { CartComponent } from './homePageComponents/cart/cart.component';
import { MenuItemsComponent } from './homePageComponents/menu-items/menu-items.component';
import { NavComponent } from '../app/homePageComponents/nav/nav.component';
import { ReviewsComponent } from '../app/homePageComponents/reviews/reviews.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '../app/homePageComponents/home/home.component';
import { ReservationsComponent } from './homePageComponents/reservations/reservations.component';
import { WelcomeComponent } from '../app/homePageComponents/welcome/welcome.component';
import { BioComponent } from './homePageComponents/bio/bio.component';
import { ReviewsPageComponent } from './homePageComponents/reviews-page/reviews-page.component';
import { TannerComponent } from './homePageComponents/tanner/tanner.component';
import { JdComponent } from './homePageComponents/jd/jd.component';
import { JonComponent } from './homePageComponents/jon/jon.component';
import { LoginComponent } from './homePageComponents/login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    LocationComponent,
    CartComponent,
    MenuItemsComponent,
    NavComponent,
    ReviewsComponent,
    HomeComponent,
    ReservationsComponent,
    WelcomeComponent,
    BioComponent,
    ReviewsPageComponent,
    TannerComponent,
    JdComponent,
    JonComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
