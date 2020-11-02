import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { ListaDeAbrigosComponent } from './components/lista-de-abrigos/lista-de-abrigos.component';
import { ContatoComponent } from './components/contato/contato.component';
import { FaqComponent } from './components/faq/faq.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';

@NgModule({
  declarations: [
    PaginaInicialComponent,
    AppComponent,
    QuemSomosComponent,
    ListaDeAbrigosComponent,
    ContatoComponent,
    FaqComponent,
    LoginComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
