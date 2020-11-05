import { AbrigoService } from './../../service/abrigo.service';
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
  

  constructor(private abrigoService: AbrigoService) { }

  ngOnInit(): void {
    this.abrigo.nome = "abriginho";
  }

  criarAbrigo(a: Abrigo): void {
    this.abrigoService.create(a).subscribe(
      ar => {
        if(ar) {
          
        } else {
          
        }
      },
      msg => { alert(msg.message); }
    )
  }

}
