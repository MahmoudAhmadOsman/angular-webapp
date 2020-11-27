import { Component, OnInit } from "@angular/core";
import { StudentsService } from "./../services/students.service";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.css"],
})
export class StudentsComponent implements OnInit {
  title: string = "Students List";

  //Data biding

  firstname: string = "Data Biding value";
  image:string = "https://placekitten.com/80/80";

  //Dta biding
  months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  name: string = "Mahmoud Osman";
  //On click change names
  changeName() {
    this.name = "John Doe";
  }

  //Date Pipe
  currentDate: Date = new Date();

  //get all students here
  students: any[];
  constructor(studentsService: StudentsService) {
    this.students = studentsService.getStudents();
  }

  //Property binding
  isDisabled() {
    let isDisabled: boolean = true;
  }

  ngOnInit(): void {}
}
