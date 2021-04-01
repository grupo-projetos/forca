class ListaBotoes {
    constructor() {
        this._lista = [];
    }

    adiciona(botao) {
        this._lista.push(botao);
    }
    lista() {
        return this._lista;
    }
}