import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { Router } from '@angular/router'
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ha-bichos';
  mostrarLogo : boolean = false

  constructor(private titleService:Title, private router: Router) {
    this.titleService.setTitle("Ha Bichos");
  }

  goToPage(pageName: string): void {
    if(pageName == ''){
      this.mostrarLogo = false
    } else {
      this.mostrarLogo = true
    }
    this.router.navigate([`${pageName}`])
  }
  
  
}
