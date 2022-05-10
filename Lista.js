class Lista{

    constructor(){
        this._lista = []
    }

    adiciona (negociacoes){
        this._lista.push(negociacoes)
    }

    get lista (){
        return [].concat(this._lista)
    }
}