import { ProductsService } from "./../services/products.service";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

//import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  title: string = "All Products";

  products = [
    {
      id: 1,
      name: "Asus' ROG Zephyrus Duo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 870.0,
      was: 985.55,
      quantity: 4754,
      imageURL: "assets/images/asus.png",
    },
    {
      id: 2,
      name: "HP Store Netbook",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 602.0,
      was: 785.55,
      quantity: 1558,
      imageURL: "assets/images/hp-note.png",
    },
    {
      id: 3,
      name: "Metal Computer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 649.0,
      was: 735.59,
      quantity: 1566,
      imageURL: "assets/images/laptop.png",
    },
    {
      id: 4,
      name: "OMEN Gaming 15,17 Laptop",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 450.0,
      was: 535.15,
      quantity: 4679,
      imageURL: "assets/images/omen-hp.png",
    },
  ];
  toastr: any;
  ProductsService: any;

  constructor(private router: Router) {}

  //Delete a product
  delete(product) {
    let index = this.products.indexOf(product);
    this.products.splice(index, 1);

    this.ProductsService.deleteUser(product._id).subscribe(
      (res) => {
        this.toastr.error(res.message);
      },
      (err) => {
        console.log(err);
      }
    );
  }


//Get product by id
showProductDetails(product){
  this.router.navigate(['/products', product.id])

}







  ngOnInit(): void {}
}
