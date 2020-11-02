import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ha-bichos';
  constructor(private titleService:Title, private router: Router) {
    this.titleService.setTitle("Ha Bichos");
  }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`])
  }
  
  
}
