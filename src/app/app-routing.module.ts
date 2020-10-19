import { ProductDetailsComponent } from './product-details/product-details.component';
import { PostsComponent } from "./posts/posts.component";
import { StudentsComponent } from "./students/students.component";
import { ProductsComponent } from "./products/products.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { from } from "rxjs";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

//3rd step
//Register ALL Routes here
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "products", component: ProductsComponent },
    { path: "product-details/:id", component: ProductDetailsComponent },
  { path: "students", component: StudentsComponent },
  { path: "posts", component: PostsComponent },
   { path: '**', redirectTo: '/', pathMatch: 'full' },

  { path: "**", component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
