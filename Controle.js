class Controle{

    constructor(){

        let $ = document.querySelector.bind(document)
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')

        this._lista = new Lista();
        this._negocioView = new NegocioView($('#negocioView'))
        this._negocioView.atualizar(this._lista)

    }

    adiciona(event){
        event.preventDefault();
        
        this._lista.adiciona(this._criaNegociacao())
        this._negocioView.atualizar(this._lista)

        this._limpaForm()
    }

    _criaNegociacao(){

        return new Negociacao(
            NegociacaoHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,this._inputValor.value,
            this._inputQuantidade.value * this._inputValor.value);
    }

    _limpaForm(){

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        
        this._inputData.focus();
    }
}