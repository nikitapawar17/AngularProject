import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  name = 'Angular6Project for Django';
  // constructor( public auth: AuthenticationService ) { }
  constructor( private _http: HttpClient, public auth: AuthenticationService) { 
    this._http.get('http://localhost:4200').subscribe(() => {
      console.log('Http Call is success from compoennt');
    }, 
    (error) => {
      console.log('Http Call is failed from component');
    })
  }
}

 