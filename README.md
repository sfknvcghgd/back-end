// Exercícios de fixação
// Resolva cada questão e imprima a resposta no terminal usando "console.log()"
// 1) Use a função .indexOf para armazenar o índice do jogador "chelo"

// 2) Usando a função .splice, substitua "chelo" e "skullz" por "molodoy" e "YEKINDAR"
// ** Use o índice encontrado na questão 1

// 3) Usando a função .map, crie uma lista com os caracteres maiúsculos (usar .toUpperCase)

// 4) Usando a função .sort, ordene a lista com os nomes maiúsculos

// 5) Usando a função .filter, filtre apenas os nomes que começam com "yconst furiaCS = ['FalleN','chelo','yuurih','KSCERATO'];

const furiaCS = ["FalleN","chelo","skullz","yuurih","KSCERATO"];

const indexChelo = furiaCS.indexOf('chelo');
console.log("1) indece de 'chelo' :", indexChelo);

furiaCS.splice(indexClelo, 2 ,"molodoy", "YEKINDAR");
console.log('2) Lista após substituição:, furiacs');

const uppercasedFuria = furiaCS.map(jogador => jogador.toUpperCase());
console.log('3) Lista em maiúsculas:', uppercasedFuria);

const sortedFuria = [...uppercasedFuria].sort();
console.log('4) Lista ordenada:', sortedFuria);

const nomesComy = uppercasedFuria.filter(nome => nome.startsWith('y'));
console.log('5) Nomes que começam com 'y':', nomesComY);
