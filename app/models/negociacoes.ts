import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[] { //readonly faz com que seja um array somente de leitura, não pode modificar posteriormente
        return this.negociacoes;
    }
}