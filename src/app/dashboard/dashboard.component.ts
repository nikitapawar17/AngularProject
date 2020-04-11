import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload, UserDetails } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent{
  currentUser : UserDetails;
  users : UserDetails[] = [];

  constructor(public auth: AuthenticationService){
    const user_obj = localStorage.getItem('currentUser')

    let payload 
    payload = user_obj.split('.')[1]
    payload = window.atob(payload)
    const user_data = JSON.parse(payload)
    console.log(user_data)
    this.currentUser = user_data;
  }
}

