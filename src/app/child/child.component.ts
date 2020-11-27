import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  //Display the parent data in here and Decorate with @Input() Decorator and also import the @Input()
  @Input()
  parentTitle:string;

  constructor() { }

  ngOnInit(): void {
  }

}
