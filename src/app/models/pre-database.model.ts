import { Injectable } from '@angular/core';
import { Produto } from './produto.model';

@Injectable({
    providedIn: 'root'
})
export class PreDatabase {

    public preDatabase: Array<Produto> = [

        {
            id: 0, 
            nome: "Sapatilha Preta",
            descricao: "Sapatilha de Couro Preto",
            foto: "../../assets/sapatilhapreta.jpeg",
            preco: 74.99,
            tamanhos: [35, 37, 38],
            modelo: "Sapatilhas",
            cor: "Preto",
            disponivel: true,
            dataAdicao: "2022-01-27",
            prontaEntrega: false
        },
        {
            id: 1, 
            nome: "Sandália Rosa",
            descricao: "Sandália rosa com tecido e couro",
            foto: "../../assets/sandaliarosa.jpeg",
            preco: 99.99,
            tamanhos: [35, 36, 37, 39, 40],
            modelo: "Sandálias",
            cor: "Rosa",
            disponivel: true,
            dataAdicao: "2022-01-27",
            prontaEntrega: false
        },
    ];

}