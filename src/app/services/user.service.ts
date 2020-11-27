import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //Get all users from remote serve
  getAllUsers(){
    return this.http.get("http://jsonplaceholder.typicode.com/users");
  }
}
