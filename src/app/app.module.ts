import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Icones
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//Paginas
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { TutorialComponent } from './pages/tutorial/tutorial.component';

//Modal
import { ModalModule } from 'ngx-bootstrap/modal';

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
    FontAwesomeModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
