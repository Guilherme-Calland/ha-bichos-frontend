import { Abrigo } from '../../../../../common/abrigo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-de-abrigos',
  templateUrl: './lista-de-abrigos.component.html',
  styleUrls: ['./lista-de-abrigos.component.css']
})
export class ListaDeAbrigosComponent implements OnInit {

  abrigo : Abrigo = new Abrigo();
  qtdDeAbrigos: number = 0;
  seCadastrando: boolean = false;
  

  constructor() { }

  ngOnInit(): void {
    this.abrigo.nome = "abriginho";
  }

  mudarNome(): void{
    this.abrigo.nome = "testando";
  }

}
