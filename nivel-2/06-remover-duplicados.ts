/*
Exercicio 6: Remover duplicados de um array, retorne outro sem repetições, sem usar Set.
[1, 2, 2, 3, 1] → [1, 2, 3]
*/

const numbers: number[] = [1, 2, 2, 3, 1];

function verificacaoNum(numeros: number[]): number[] {
  let result: number[] = [];

  for (let i = 0; i < numeros.length; i++) {
    let jaExiste = false;

    for (let j = 0; j < result.length; j++) {
      if (numeros[i] === result[j]) {
        jaExiste = true;
        break;
      }
    }

    if (!jaExiste) {
      result[result.length] = numeros[i];
    }
  }

  return result;
}

console.log("Execicio 6");
console.log(verificacaoNum(numbers));
console.log("");

// criei uma variavel para armazenar os numeros sem os duplicados, depois fiz um for para pecorre o array dos numeros, e dentro desse for eu criei uma variavel boolena que começa com false, depois dessa variavel eu fiz outro for para pecorre a variavel sem os numeros duplicados, ai fiz um if para verificar se posição a posicão da primeira variavel com os numeros duplicas com a variavel que armazena os numeros sem ser duplicados, fiz uma comparação entre os dois, se for verdadeira a vairavel boolean vira true e para o for, depois fora do segundo for eu fiz outra verificação, que quando a variavel boolean ficar true ele adicionar o numeros na vairavel de armazenamento.
