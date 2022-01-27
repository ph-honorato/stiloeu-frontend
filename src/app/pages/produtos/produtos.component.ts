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
  
  constructor(
    private pd: PreDatabase
  ) { 

    this.produtosExibidos = pd.preDatabase;

  }

  ngOnInit(): void {
  }


  

}
