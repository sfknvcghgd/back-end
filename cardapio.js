let alimentos = ["café", "pão", "pão de mel ", "leite", "nescal", "cachorro quente", "refri"]
let valores = [10 , 50 , 4 , 0 , 2 , 30 , 10 ]

function mostraCardapio() {
    console.log("### CARDAPIO ###")
    contador = 0;
    while(contador < alimentos.length){
        let c2 = contador + 1 
        console.log(c2 + " - " + alimentos [contador] + " R$ " + valores[contador])
        contador = contador + 1;
    }
}

function adicionaAlimentos(alimento , valor){
    alimentos.push(alimento);
    valores.push(valor)
}

let valoresPromocao = valores.map((valor) => valor - (valor*0.15));
//console.log(valorPromocao)

function mostraCardapioEspecial() {
    console.log("### CARDAPIO ESPECIAL ###")
    contador = 0;
    while(contador < alimentos.length){
        let c2 = contador + 1 
        console.log(c2 + " - " + alimentos [contador] + " R$ " + valoresPromocao[contador])
        contador = contador + 1;
    }
}

mostraCardapio();
adicionaAlimentos("queijo" , 10);
mostraCardapio();
mostraCardapioEspecial();