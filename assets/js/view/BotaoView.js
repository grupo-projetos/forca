class BotaoView {
    constructor(elemento) {
        this.elemento = elemento;
    }
    template(model) {
            return `<nav>${model.map(button => `<button onClick="alert('ok')">${button.palavra}</button>`).join('')}</nav>`
    }
    update(texto) {
        this.elemento.innerHTML = this.template(texto)
    }
}