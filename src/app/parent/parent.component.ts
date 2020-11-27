import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

parentTitleName:string = "A title coming from Parent Component";


  constructor() { }


//Get data from Child Component
childData:string;
parentMethod(data){
this.childData = data;
//Now you can use or bind the childData inside the Parent Component 
}

  ngOnInit(): void {
  }



}
