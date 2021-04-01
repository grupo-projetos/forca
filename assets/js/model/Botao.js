class Botao {
    constructor(letraRecebida) {
        this._letraDaClasse = letraRecebida;
        Object.freeze(this)
    }
    get Letra() {
        return this._letra;
    }
    click() {
        alert("ok");
    }
}