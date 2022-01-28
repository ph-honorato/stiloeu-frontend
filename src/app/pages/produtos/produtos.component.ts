import { Component, OnInit } from '@angular/core';
import { PreDatabase } from 'src/app/models/pre-database.model';
import { Produto } from 'src/app/models/produto.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtosExibidos: Array<Produto>;
  
  constructor (
    private pd: PreDatabase

  ) { 

    this.produtosExibidos = pd.preDatabase;

  }

  ngOnInit(): void { }


  addTest(){

    var p: Produto = {
      id: 0, 
      nome: "Sapatilha Azul",
      descricao: "Sapatilha de Couro Preto",
      foto: "../../assets/sapatilhapreta.jpeg",
      preco: 74.99,
      tamanhos: [35, 37, 38],
      modelo: "sapatilha",
      cor: "preto",
      disponivel: true,
      dataAdicao: "2022-01-27",
      prontaEntrega: false
    }

    this.produtosExibidos.push(p);

  }
  

}
