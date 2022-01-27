import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Icones
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//Paginas
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { TutorialComponent } from './pages/tutorial/tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    QuemSomosComponent,
    TutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
