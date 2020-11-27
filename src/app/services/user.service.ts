import { HttpClient,  } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import "rxjs/add/operator/catch"; //import for error
// import "rxjs/add/observable/throw"; //Import for error
import {catchError} from "rxjs/operators"
  import { Observable, throwError } from 'rxjs';
   
    
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
  
  //Get all users from remote serve
     //URL = "https://jsonplaceholder.typicode.com/users";
  getAllUsers(){
    const url ="https://jsonplaceholder.typicode.com/users";
    return this.http.get(url)
      .pipe(catchError(this.handleError))
  }

//Create handleError function that handles error
handleError(error){
return throwError(error.message || "Servver error occurred")
}


}


 