import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService } from '../services/user.service';
import { HttpClient  } from '@angular/common/http';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  doyenne = [
    {name: 'Avocat'},
    {name: 'Doctor'},
    {name: 'juge'},

  ];
 title : string;
 description : string;
 doyensSelected :string;
 owner : string;
 link: string;
  constructor(
    private userService: UserService,
    private router: Router,
    private http: HttpClient,

  ) { }

ngOnInit(): void {
const user = this.userService.getCurrentUser()
if(!user){
  console.log(user)
  this.router.navigate (['/login'])
}else{
  this.owner = user.id;
  console.log(this.owner)
}

  }

  AddNews(){
    const news = {
      doyen : this.doyensSelected,
      title : this.title,
      description : this.description,
      owner : this.owner,
      link:this.link
    }
      console.log(news)

    this.http.post<any>('news/add',news).subscribe(
      res=>{
        console.log(res)
      }
    )

  }

}
