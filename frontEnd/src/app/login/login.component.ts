import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email : string;
  password : string;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private http: HttpClient
  ) {

  }

  ngOnInit(): void {
  }
  onLogin(){
    const user = {
      email : this.email,
      password : this.password
    }
    this.http.post<any>('/users/login', user).subscribe(
      res => {
        if (!res.success) {
          console.log('err')
        }
        this.userService.saveUserData(res.token, res.user);
this.router.navigate (['/dashboard'])

      }
    )
  }


}


