import { Component } from '@angular/core';
import { UserService } from './auth/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  me = {
    id: 0,
    name: "",
    email: "seb@seb.seb",
    password: "sebsebseb",
  }
  //LOGIN FORMULÄR

  user2 = {
    id: 0,
    name: "",
    email: "",
    password: "",
  }

  constructor(private userService: UserService){
    //userService.loginUser(this.me)
  }

  login(){
    this.userService.loginUser(this.me)
  }

  logout(){
    this.userService.logoutUser(this.me)
  }

  register(){
    this.userService.registerUser()
  }

}
