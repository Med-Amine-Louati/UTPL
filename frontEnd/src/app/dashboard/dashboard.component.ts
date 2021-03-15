import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService } from '../services/user.service';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

import * as AppUtil from '../../app/common/common.utill'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 title : string;
 description : string;
 owner : string;
  constructor(
    private userService: UserService,
    private router: Router,
    private http: HttpClient,

  ) { }

  ngOnInit(): void {
const user = this.userService.getCurrentUser()
  this.owner = user.id;
  console.log(this.owner)
  }
  AddNews(){
    const news = {
      title : this.title,
      description : this.description,
      owner : this.owner
    }


    this.http.post<any>('news/add',news).subscribe(
      res=>{
        console.log(res)
      }
    )

  }

}
