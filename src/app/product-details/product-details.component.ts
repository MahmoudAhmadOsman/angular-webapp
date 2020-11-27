import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';
 import { Component, OnInit } from '@angular/core';
  

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  //2.
  public productId;
  constructor(private router: ActivatedRoute, private route: Router) { }


  ngOnInit(): void {
    //1.
    //Now read the paramter using ActivatedRoute
    let id = parseInt(this.router.snapshot.paramMap.get("id"));
    this.productId = id;
  
  }

//VIEW Show Product Details
// showProductDetails(id: number){
// this.route.navigate(['product-details', id]);
// }


}
