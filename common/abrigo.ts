
export class Abrigo{
    cnpj_cpf: string;
    nome: string;
    email: string;
    descricao: string;
    qtd_animais: string;
    telefone: string;
    rua: string;
    numero: string;
    cep: string;
    bairro: string;
    cidade: string;
    uf: string;

    constructor(){
        this.clean();
    }

    clean() : void {
        this.cnpj_cpf = "";
        this.nome = "";
        this.email = "";
        this.descricao = "";
        this.qtd_animais = "";
        this.telefone = "";
        this.rua = "";
        this.numero = "";
        this.cep = "";
        this.bairro = "";
        this.cidade = "";
        this.uf = "";
    }

    copyFrom(from: Abrigo): void {
        this.cnpj_cpf = from.cnpj_cpf;
        this.nome = from.nome;
        this.email = from.email;
        this.descricao = from.descricao;
        this.qtd_animais = from.qtd_animais;
        this.telefone = from.telefone;
        this.cep = from.cep;
        this.bairro = from.bairro;
        this.cidade = from.cidade;
        this.uf = from.uf;
    }
}

