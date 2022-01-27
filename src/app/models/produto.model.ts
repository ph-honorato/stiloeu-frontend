
export class Produto {
    
    id: number = 0;                 //Idenficação interna
    
    nome: string = "";              //Nome do calcado
    
    descricao: string = "";         //Descricao do produto

    preco: number = 0;              //Preco do produto

    tamanhos: Array<number> = [];   //Tamanhos disponíveis do produto
      
    modelo: string = "";            //Modelo do produto  

    cor: string = "";               //Cor do produto

    disponivel: boolean = false;    //Se está disponivel para venda

    dataAdicao: string = "";        //Data de adição

    prontaEntrega: boolean = false; //Se está disponível para pronta entrega

}