import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Models
import { Produto } from 'src/app/models/produto.model';

// Icone
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { FiltroService } from './filtro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  /*
    Variáveis
  */
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;


  /*
    Construtor e OnInit
  */
  constructor(
    private router: Router,
    private fs: FiltroService
  ) { }

  ngOnInit() { }


  abrirWhatsapp(){
    window.open("https://api.whatsapp.com/send?phone=5531992612527&text=Olá!%20Gostaria%20de%20algo%20stilo%20eu!%20=D", '_blank')
  }

  abrirInstagram(){
    window.open("https://www.instagram.com/stiloeucalcados/", '_blank')
  }


  abrirPagina(url: string){
    this.router.navigateByUrl(url)
  }

  abrirProdutos(){
    this.router.navigateByUrl("/").then( () => {
      this.fs.sendClickEventProdutos();
    })
  }

  abrirLancamentos(){
    this.router.navigateByUrl("/").then( () => {
      this.fs.sendClickEventLancamentos();
    })
  }

  abrirPromocoes(){
    this.router.navigateByUrl("/").then( () => {
      this.fs.sendClickEventPromocoes();
    })
  }

}


