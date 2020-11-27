import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor() { }

//List of countries array
countries:any[] = [
    {code:"so", country: "Somalia"},
    {code:"usa", country: "United States"},
    {code:"uk", country: "United Kingdom"},
    {code:"ca", country: "Canada"},
    {code:"au", country: "Australia"},

];

//Display  a country based on user selection on a country code
selectedCoutry: string;
countryChoices(code){
  this.selectedCoutry = code;
}


  ngOnInit(): void {
  }

}
