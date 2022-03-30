
export class Produto {
    
    id: number = 0;                 //Idenficação interna
    nome: string = "";              //Nome do calcado
    descricao: string = "";         //Descricao do produto
    foto: string = "";              //Foto do produto
    preco: number = 0;              //Preco do produto

    tamanhos: Array<number> = [];   //Tamanhos disponíveis do produto
    modelo: string = "";            //Modelo do produto  
    cor: string = "";               //Cor do produto

    disponivel: boolean = false;    //Se está disponivel para venda
    prontaEntrega: boolean = false; //Se está disponível para pronta entrega
    lancamento: boolean = false;    //Se é um lançamento
    promocao: boolean = false;      //Se está em promoção
    precoPromocao: number = 0;      //Preço da promoção

    dataAdicao: string = "";        //Data de adição
    dataModificacao: string = "";   //Data da ultima modificacao

}