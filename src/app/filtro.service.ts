import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltroService {

  //Declarações
  private subjectProdutos = new Subject<any>();
  private subjectLancamentos = new Subject<any>();
  private subjectPromocoes = new Subject<any>();
  
  //Quando clicar em "PRODUTOS"
  sendClickEventProdutos() {
    this.subjectProdutos.next(null);
  }

  getClickEventProdutos(): Observable<any>{ 
    return this.subjectProdutos.asObservable();
  }

  //Quando clicar em "LANÇAMENTOS"
  sendClickEventLancamentos() {
    this.subjectLancamentos.next(null);
  }

  getClickEventLancamentos(): Observable<any>{ 
    return this.subjectLancamentos.asObservable();
  }

  //Quando clicar em "PROMOÇÕES"
  sendClickEventPromocoes() {
    this.subjectPromocoes.next(null);
  }

  getClickEventPromocoes(): Observable<any>{ 
    return this.subjectPromocoes.asObservable();
  }

  constructor() { }
}
