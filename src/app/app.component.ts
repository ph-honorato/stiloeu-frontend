import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  /*
    Variáveis
  */
  public count = 0;


  /*
    Construtor e OnInit
  */
  constructor(
    // private cs: CommonService
  ){ }

  ngOnInit() { }


  
  add(){

    this.count = this.count + 1;

  }



}


