import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Msconsume';
  isHomeDisabled! : boolean;
  constructor(private router : Router){

    this.isHomeDisabled = false;

    // Subscribe to route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check the current path
        if (event.url === '/login' || event.url === '/signup') {
          this.isHomeDisabled = true;
        } else {
          this.isHomeDisabled = false;
        }
      }
    });
  }
}
