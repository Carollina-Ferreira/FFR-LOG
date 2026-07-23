import api from "./api";

export interface Contato {

    nome: string;

    email: string;

    telefone: string;

    necessidade: string;

}

export async function enviarContato(data: Contato) {

    const response = await api.post(
        "/contatos",
        data
    );

    return response.data;

}