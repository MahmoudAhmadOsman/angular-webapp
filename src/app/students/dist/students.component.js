"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StudentsComponent = void 0;
var core_1 = require("@angular/core");
var StudentsComponent = /** @class */ (function () {
    function StudentsComponent(studentsService) {
        this.title = "Students List";
        //Data biding
        this.firstname = "Data Biding value";
        this.image = "https://placekitten.com/80/80";
        //Dta biding
        this.months = [
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
        this.name = "Mahmoud Osman";
        //Date
        this.currentDate = new Date();
        //getStudents() function is comming from the [student.service.ts] Service class
        this.students = studentsService.getStudents();
    }
    //On click change names
    StudentsComponent.prototype.changeName = function () {
        this.name = "John Doe";
    };
    //Property binding
    StudentsComponent.prototype.isDisabled = function () {
        var isDisabled = true;
    };
    StudentsComponent.prototype.ngOnInit = function () { };
    StudentsComponent = __decorate([
        core_1.Component({
            selector: "app-students",
            templateUrl: "./students.component.html",
            styleUrls: ["./students.component.css"]
        })
    ], StudentsComponent);
    return StudentsComponent;
}());
exports.StudentsComponent = StudentsComponent;
