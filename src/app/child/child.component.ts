import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  //Display the parent data in here and Decorate with @Input() Decorator and also import the @Input()
  @Input()
  parentTitle:string;


//Pass data to the Parent Component using EventEmitter() function
//create var call it, childTitleName
//Decorate the event with @Output decorator and import it
@Output() // Passing data to the Parent from Child
childTitleName:EventEmitter<string> = new EventEmitter<string>();
//When btn is clicked, run this, passDataToParent(), function
passDataToParent(){
  // alert(11)
  //EventEmitter
  this.childTitleName.emit("This message is coming from the 'Child Component!'");
}


  constructor() { }

  ngOnInit(): void {
  }

}
