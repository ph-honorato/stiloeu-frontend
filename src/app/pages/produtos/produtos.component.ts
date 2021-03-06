import { Component, OnInit, TemplateRef, ViewChild  } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, AbstractControl } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { PreDatabase } from 'src/app/models/pre-database.model';
import { Produto } from 'src/app/models/produto.model';


import { FiltroService } from 'src/app/filtro.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  //Array de Produtos Exibidos na Tela
  produtosExibidos: Array<Produto>;

  //Produto exibido no modal
  produtoExibido: Produto;

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

  //Declaraçao de modais
  @ViewChild('mProduto', { static: false }) mProduto?: ModalDirective; //Modal de erro na Checagem
  
  //Eventos da barra superior
  clickEventsubscriptionProdutos: Subscription;
  clickEventsubscriptionLancamentos: Subscription;
  clickEventsubscriptionPromocoes: Subscription;


  //Construtor
  constructor (
    private pd: PreDatabase,
    private fb: FormBuilder,
    private fs: FiltroService

  ) { 

    //Carrega o array de produtos com o banco de dados 
    this.produtosExibidos = this.preencherArray();

    //Inicializa o produto
    this.produtoExibido = new Produto;

    //Carregando array de filtros
    this.arrayModelosFiltros = ["Sapatilhas", "Sandálias"];
    this.arrayCoresFiltros = ["Preto", "Rosa"];
    this.arrayNumerosFiltros = [35, 36, 37, 38, 39, 40];

    //Form de Filtros
    this.filtrosForm = fb.group({
      'tipo':         ['', [ Validators.required ]],
      'modelo':       ['', [ Validators.required ]],
      'cor':          ['', [ Validators.required ]],
      'numero':       ['', [ Validators.required ]]
    });

    this.tipo = this.filtrosForm.controls['tipo'];
    this.modelo = this.filtrosForm.controls['modelo'];
    this.cor = this.filtrosForm.controls['cor'];
    this.numero = this.filtrosForm.controls['numero'];

    //Eventos da barra superior
    this.clickEventsubscriptionProdutos = this.fs.getClickEventProdutos().subscribe(()=>{
      this.limparFiltros();
    })

    this.clickEventsubscriptionLancamentos = this.fs.getClickEventLancamentos().subscribe(()=>{
      this.tipo.setValue('lancamentos');
      this.aplicarFiltros();
    })

    this.clickEventsubscriptionPromocoes = this.fs.getClickEventPromocoes().subscribe(()=>{
      this.tipo.setValue('promocoes');
      this.aplicarFiltros();
    })

  }

  ngOnInit(): void { }

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
    if(this.tipo.value != ""){

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
    if(this.tipo.value != tipo)
      this.tipo.setValue(tipo);
    else
      this.tipo.setValue("");

    this.aplicarFiltros();
  }

  filtrarModelo(modelo: String){
    if(this.modelo.value != modelo)
      this.modelo.setValue(modelo)
    else
      this.modelo.setValue("");

    this.aplicarFiltros();
  }

  filtrarCor(cor: String){
    if(this.cor.value != cor)
      this.cor.setValue(cor);
    else
      this.cor.setValue("");

    this.aplicarFiltros();
  }

  filtrarNumero(numero: Number){
    if(this.numero.value != numero)
      this.numero.setValue(numero);
    else
      this.numero.setValue("");

    this.aplicarFiltros();
  }
  
  limparFiltros(){
    this.tipo.setValue("");
    this.modelo.setValue("");
    this.cor.setValue("");
    this.numero.setValue("");
    this.aplicarFiltros();
  }



  selecionaProduto( produto: Produto ){

    this.produtoExibido = produto;
    this.mProduto?.show();

  }

}
