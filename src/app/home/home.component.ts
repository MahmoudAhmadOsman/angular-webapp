import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  title: string = "Angular 10 Covid-19 API";
  // myName: string = "Mahmoud Osman";

  constructor() {
    //Return or show  name in the home component
    // getName(){
    //   return this.myName;
    // }
  }

  ngOnInit(): void {}
}
