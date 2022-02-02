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
    this.produtosExibidos = this.preencherArray();

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

    // console.log(this.filtrosForm);

    console.log(this.numero);

  }
  

  preencherArray(){

    var array: Array<Produto> = [];
    
    for (var x = 0; x < this.pd.preDatabase.length; x++){

      if(this.pd.preDatabase[x].disponivel)
        array.push(this.pd.preDatabase[x]);
    
    }

    return array;
  }


  aplicarFiltros(){

    //Define array de filtro e preenche
    var arrayFiltro: Array<Produto> = this.preencherArray();

    //Filtro dos tipos
    if(this.tipo.value != "todos"){

      var arrayIntermediario: Array<Produto> = [];
      
      if (this.tipo.value == "lancamentos") {

        for(var x=0; x < arrayFiltro.length; x++){
  
          if( arrayFiltro[x].lancamento )
            arrayIntermediario.push( arrayFiltro[x] );
   
        }
  
      } else if (this.tipo.value == "promocoes") {
  
        for(var x=0; x < arrayFiltro.length; x++){
  
          if( arrayFiltro[x].promocao )
            arrayIntermediario.push( arrayFiltro[x] );
   
        }
  
      } else if (this.tipo.value == "pronta-entrega") {
  
        for(var x=0; x < arrayFiltro.length; x++){
  
          if( arrayFiltro[x].prontaEntrega )
          arrayIntermediario.push( arrayFiltro[x] );
   
        }
  
      }

      arrayFiltro = arrayIntermediario;
    }

    //Filtro de modelo
    if(this.modelo.value != ""){

      var arrayIntermediario: Array<Produto> = [];
      
      for(var x=0; x < arrayFiltro.length; x++){

        if(arrayFiltro[x].modelo == this.modelo.value)
          arrayIntermediario.push(arrayFiltro[x])

      }

      arrayFiltro = arrayIntermediario;
    }
    
    //Filtro de cor
    if(this.cor.value != ""){

      var arrayIntermediario: Array<Produto> = [];
      
      for(var x=0; x < arrayFiltro.length; x++){

        if(arrayFiltro[x].cor == this.cor.value)
          arrayIntermediario.push(arrayFiltro[x])

      }

      arrayFiltro = arrayIntermediario;
    }
    
    //Filtro de numero
    if(this.numero.value != ""){

      var arrayIntermediario: Array<Produto> = [];
      
      for(var x=0; x < arrayFiltro.length; x++){

        for (var y=0; y < arrayFiltro[x].tamanhos.length; y++){
          
          if(arrayFiltro[x].tamanhos[y] == this.numero.value ){

            arrayIntermediario.push(arrayFiltro[x]);
            y = arrayFiltro[x].tamanhos.length;

          }

        } 

      }

      arrayFiltro = arrayIntermediario;
    }

    //Atualiza o array
    this.produtosExibidos = arrayFiltro;


  }

  filtrarTipo(tipo: String){
    this.tipo.setValue(tipo);
    this.aplicarFiltros();
  }

  filtrarModelo(modelo: String){
    this.modelo.setValue(modelo);
    this.aplicarFiltros();
  }

  filtrarCor(cor: String){
    this.cor.setValue(cor);
    this.aplicarFiltros();
  }

  filtrarNumero(numero: Number){
    this.numero.setValue(numero);
    this.aplicarFiltros();
  }
  

}
