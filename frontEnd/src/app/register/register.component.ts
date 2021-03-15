import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username : string;
  email : string;
  password : string;
  confirmpassword : string;
  constructor(
  private userService: UserService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }
  onRegister(){
    // if(!this.username|| !this.email|| !this.password|| !this.confirmpassword){
    //   console.log("all field should not be empty")
    // }
    // if (this.password !== this.confirmpassword){
    //   console.log('password not match ')
    // }else{


    // }
    const user = {
      username : this.username,
      email : this.email,
      password : this.password
    }
    this.http.post<any>('/users/register', user).subscribe(
      res => {
            console.log(res)

      }
    )


  }

  }

