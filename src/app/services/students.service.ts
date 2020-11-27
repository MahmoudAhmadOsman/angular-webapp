import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StudentsService {
  getStudents() {
    return [
      {
        "id":1541, 
         "first_name": "John Smith",
         "last_name": "Smith",
         "salary":45243,
        "birthDate": "November/13/1969"
      },
          {
        "id":2648, 
         "first_name":"Jone",
         "last_name": "Smith",
         "salary":24338,
        "birthDate": "Febuary/3/1995"
      },
          {
        "id":3459, 
        "first_name": "John",
        "last_name": "Doe",
        "salary":15494,
        "birthDate": "March/9/1967"
      },
          {
      "id":4674, 
        "first_name": "Tom",
        "last_name": "Ey",
        "salary":21452,
        "birthDate": "Octber/31/1975"
      },
 {
      "id":5974, 
        "first_name": "Jackson",
        "last_name": "Eri",
        "salary":32553,
        "birthDate": "January/12/1988"
      },
  
        ];
  }

  constructor() {}
}
