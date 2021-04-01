class BotaoController {
    constructor() {
        this.listaBotoes = new ListaBotoes();
        this.botaoView = new BotaoView(document.querySelector(".teclado"));
        this.init();
    }
    init() {
        fetch('palavras.json')
            .then(json => json.json())
            .then(res => this.adiciona(res.palavras))
            .catch(erro => console.error(erro))
    }
    adiciona(lista) {
        this.botaoView.update(lista)
    }
}