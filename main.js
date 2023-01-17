var dados = {
    nome: 'Bruno',
    sobrenome: 'Jaques',
    idade: 22,
    satisfeito: true,
    nomeCompleto(){ 
        return `${this.nome} ${this.sobrenome}`
    }
}
dados.nomeCompletoAoContrario = function ()  {
    return `${this.sobrenome} ${this.nome}`
}


