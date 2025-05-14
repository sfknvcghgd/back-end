
//1
const nome = "Lucas ";
const numeroChamada = 20 ;

//2
const jogosFavoritos = ["The Legend of Zelda", "Xadrez", "Minecraft"];

//3
console.log("####Exercício 3 ####");
console.log("Jogos favoritos do Lucas são : ");

let i = 0;
while (i < 3) {
    console.log(jogosFavoritos[i]);
    i++;
}

//4
const filmeFavorito = { 
    nome : nome,
    titulo : "A Origem",
    anoLancamento : 2010 ,
    notaIBMD : 8.8,
};

//5
console.log("#### Ezercício 5 ####")

if(filmeFavorito.notaIBMD <= 4.0){
    console.log("O filme possui uma nota considerada baixa .")
}

if(filmeFavorito.notaIBMD >= 4.1 && filmeFavorito.notaIBMD<= 7.0 ){
    console.log("O filme possui uma nota considerada razóavel .")
}

if(filmeFavorito.notaIBMD >7.0 ){
    console.log("O filme é muito bom!")
}

//6
const previsaoTempo = [
    {
        dia: "segunda",
        temperaturaMin: 14,
        temperaturaMax: 19,
        chanceDeChuva: 10
    },
    {
        dia: "terça",
        temperaturaMin: 13,
        temperaturaMax: 20,
        chanceDeChuva: 10
    },
    {
        dia: "quarta",
        temperaturaMin: 15,
        temperaturaMax: 22,
        chanceDeChuva: 80
    },
    {
        dia: "quinta",
        temperaturaMin: 13,
        temperaturaMax: 18,
        chanceDeChuva: 60
    },
    {
        dia: "sexta",
        temperaturaMin: 12,
        temperaturaMax: 16,
        chanceDeChuva: 40
    }
]

function verificaChuva(listaPrevisao) {
    let i = 0
    while (i < 5) {
        //console.log(listaPrevisao[i])
        if(listaPrevisao[i].chanceDeChuva >= 50){
            console.log(listaPrevisao[i].dia+": levar guarda chuva")
        }else{
        console.log(listaPrevisao[i].dia+":tempo agradávelS")
        }
    i++;
}


}
verificaChuva(previsaoTempo);

