class MenView{
    constructor(mensagem){
        this._mensagem = mensagem
    }

    get mensagem (){
        return this._mensagem;
    }

    set mensagem (mensagem){
        return this._mensagem = mensagem
    }

    _modelo(envio){
        `${envio}`
    }

    template(envio){
        this._mensagem.innerHTML = this._modelo(envio)
    }
}