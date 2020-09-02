import { ProductsService } from "./../services/products.service";
import { Component, OnInit } from "@angular/core";
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
      name: "Frozen Beaf",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 870.0,
      quantity: 4754,
    },
    {
      id: 2,
      name: "Rustic Chicken",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 602.0,
      quantity: 1558,
    },
    {
      id: 3,
      name: "Metal Computer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 649.0,
      quantity: 1566,
    },
    {
      id: 4,
      name: "Refined Chair",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 660.0,
      quantity: 4679,
    },
  ];
  toastr: any;
  ProductsService: any;

  constructor() {}

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

  ngOnInit(): void {}
}
