import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, AbstractControl } from '@angular/forms';

import { PreDatabase } from 'src/app/models/pre-database.model';
import { Produto } from 'src/app/models/produto.model';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  //Array de Produtos Exibidos na Tela
  produtosExibidos: Array<Produto>;

  //Array de modelos, cores e números dos produtos
  arrayModelosFiltros: Array<String>;
  arrayCoresFiltros: Array<String>;
  arrayNumerosFiltros: Array<Number>;

  //Form de de Filtros
  filtrosForm: FormGroup;
  tipo: AbstractControl;
  modelo: AbstractControl;
  cor: AbstractControl;
  numero: AbstractControl;
  
  constructor (
    private pd: PreDatabase,
    private fb: FormBuilder,

  ) { 

    //Carrega o array de produtos com o banco de dados 
    this.produtosExibidos = pd.preDatabase;

    //Carregando array de filtros
    this.arrayModelosFiltros = ["Sapatilhas", "Sandálias"];
    this.arrayCoresFiltros = ["Preto", "Rosa"];
    this.arrayNumerosFiltros = [35, 36, 37, 38, 39, 40];

    //Form de Filtros
    this.filtrosForm = fb.group({
      'tipo':         ['todos', [ Validators.required ]],
      'modelo':       ['', [ Validators.required ]],
      'cor':          ['', [ Validators.required ]],
      'numero':       ['', [ Validators.required ]]
    });

    this.tipo = this.filtrosForm.controls['tipo'];
    this.modelo = this.filtrosForm.controls['modelo'];
    this.cor = this.filtrosForm.controls['cor'];
    this.numero = this.filtrosForm.controls['numero'];

  }

  ngOnInit(): void { }


  addTest(){

    // var p: Produto = {
    //   id: 0, 
    //   nome: "Sapatilha Azul",
    //   descricao: "Sapatilha de Couro Preto",
    //   foto: "../../assets/sapatilhapreta.jpeg",
    //   preco: 74.99,
    //   tamanhos: [35, 37, 38],
    //   modelo: "sapatilha",
    //   cor: "preto",
    //   disponivel: true,
    //   dataAdicao: "2022-01-27",
    //   prontaEntrega: false
    // }

    // this.produtosExibidos.push(p);

    console.log(this.filtrosForm.value);

  }
  

}
