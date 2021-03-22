import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {News } from '../../../../server/models/News.js'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit {
  news: News[];


  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http.get('news/listed').subscribe((data: News[]) => {
    this.news = data;
    console.log(this.news)
         })


  }




}
