import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  //Title
  title:string ="Users List";

  //Users array
  users:any= [];

  //display an Error if something goes wrong
  errorMessage:string ="Loading...";


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data)=>{
      this.users = data;
    },(err)=>{
      this.errorMessage = "An internal error has occurred while fetching data from the Users API";
    } );
  }

}
