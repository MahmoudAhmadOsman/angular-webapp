import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { AppRoutingModule } from "./app-routing.module";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProductsComponent } from "./products/products.component";
import { StudentsComponent } from "./students/students.component";
import { FormsModule } from "@angular/forms";
import { PostsComponent } from "./posts/posts.component";
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CountriesComponent } from './countries/countries.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component'; // for Template Driven Form Module

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProductsComponent,
    StudentsComponent,
    PostsComponent,
    FooterComponent,
    ProductDetailsComponent,
    CountriesComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
