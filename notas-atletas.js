let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
];

    let nomes = atletas.map(function(elem){
        return elem.nome
    })

    let notasRecebidas = atletas.map(function(elem){
        return elem.notas
    })


for (let i = 0; i < atletas.length; i++){
            let notasAtleta = notasRecebidas[i].sort(function(a, b) {
            return a - b;
        }).slice(1, notasRecebidas[i].length-1)

            let soma = notasAtleta.reduce(function(total,atual){
                return total + atual
            })

            let media = soma/notasAtleta.length

            console.log("Atleta:" + nomes[i])
            console.log("Notas Obtidas:" + notasRecebidas[i])
            console.log("Média Válida:" + media)
            console.log()
        }



