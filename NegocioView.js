class NegocioView{

    constructor(elemento){
        this._elemento = elemento
    }

    _template(model){

        return `<table class = "table-principal">
         <thead>
             <tr>
                 <th>Data</th>
                 <th>Quantidade</th>
                 <th>Valor</th>
                 <th>Volume</th>
             </tr>
         </thead>
         <tbody>
             ${model.lista.map(n => `
                <tr>
                    <td>${NegociacaoHelper.dataParaTexto(n.data)}</td>
                    <td>${n.quantidade}</td>
                    <td>${n.valor}</td>
                    <td>${n.volume}</td>
                </tr>
            `).join("")}
         </tbody>
         <tfoot>
             <td colspan="3"></td>
             <td>${model.lista.reduce((total,n) => total + n.volume,0.0)}</td>
         </tfoot>
        </table>`
    }

    atualizar(model){

        this._elemento.innerHTML = this._template(model)
    }
}