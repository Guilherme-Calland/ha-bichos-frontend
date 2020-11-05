import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-de-abrigos',
  templateUrl: './lista-de-abrigos.component.html',
  styleUrls: ['./lista-de-abrigos.component.css']
})
export class ListaDeAbrigosComponent implements OnInit {

  qtdDeAbrigos: number = 0;
  seCadastrando: boolean = false;
  

  constructor() { }

  ngOnInit(): void {
  }

}
