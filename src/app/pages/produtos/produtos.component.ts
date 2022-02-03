import { Component, OnInit, TemplateRef  } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, AbstractControl } from '@angular/forms';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';


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
  modalRef?: BsModalRef;
  
  //Construtor
  constructor (
    private pd: PreDatabase,
    private fb: FormBuilder,
    private ms: BsModalService

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
  }

  ngOnInit(): void { }


  test(){
    console.log("teste");
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


  openModal(template: TemplateRef<any>, produto: Produto) {

    this.selecionaProduto(produto);

    var config = {
      animated: true
    };

    this.modalRef = this.ms.show(template, config);
  }


  selecionaProduto( produto: Produto ){

    this.produtoExibido = produto;
    console.log("tst", this.produtoExibido);

  }

}
