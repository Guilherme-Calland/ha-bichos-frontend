import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ListaDeAbrigosComponent } from './components/lista-de-abrigos/lista-de-abrigos.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';

const routes: Routes = [
  {
    path: '', component: PaginaInicialComponent
  },
  {
    path: 'quemsomos', component: QuemSomosComponent
  },
  {
    path: 'listadeabrigos', component: ListaDeAbrigosComponent
  },
  {
    path: 'contato', component: ContatoComponent
  },
  {
    path: 'faq', component: FaqComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'cadastro', component: CadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
