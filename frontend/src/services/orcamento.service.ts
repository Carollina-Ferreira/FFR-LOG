import api from "./api";


export interface Orcamento {

    nome:string;

    email:string;

    telefone:string;

    tipoTransporte:string;

    origemColeta:string;

    destinoEntrega:string;

    detalhesEntrega:string;

}



export async function enviarOrcamento(data:Orcamento){

    const response = await api.post(
        "/orcamentos",
        data
    );


    return response.data;

}