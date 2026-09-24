/*
Exercício 3: Contador de palavras
Dada uma frase, conte quantas vezes cada palavra aparece.
"a casa é a casa" → { a: 2, casa: 2, é: 1 }
*/

// preciso separa o a frase, depois pecorre o array e contar quando vezes a palavra aparece

const frase = "a casa é a casa";

function contagemPalavra(frase: string) {
  const separar = frase.split(" ");
  let contagem: { [key: string]: number } = {};

  for (let i = 0; i < separar.length; i++) {
    const palavra = separar[i];

    if (contagem[palavra]) contagem[palavra] += 1;
    else contagem[palavra] = 1;
  }

  return contagem;
}

console.log(contagemPalavra(frase));

//Primeiro separei a frase em palavras em uma nova variavel de array, depois criei uma variavel para armazenar o resultado e em seguinda usei o for para percorre o array das palavras, depois do for criei um variavel const para armazenar todas as palavras e depois eu fiz uma verificação com o if, se a verificação retorna true ela soma mais um se não continua como um.
