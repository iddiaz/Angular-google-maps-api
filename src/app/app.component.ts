import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  lat: number = 40.308381;
  lng: number = -3.725336;
  zoom: number = 16;

}
