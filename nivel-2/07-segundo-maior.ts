/*
Exercicio 7: Segundo maior, dado um array, retorne o segundo maior número, sem sort e sem Math.max.
[3, 9, 2, 7] → 7
Este é uma evolução direta do exercício 2. O que você precisa guardar agora em vez de uma variável só?
*/

const numbers: number[] = [3, 9, 7, 2, 11];

function verificarSegundoMaior(numbers: number[]): number {
  let maior: number = -Infinity;
  let segundoMaior: number = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    let atual = numbers[i];

    if (atual > maior) {
      segundoMaior = maior;
      maior = atual;
    } else if (atual > segundoMaior && atual < maior) {
      segundoMaior = atual;
    }
  }

  return segundoMaior;
}

console.log("Execicio 7");
console.log(verificarSegundoMaior(numbers));
console.log("");

// eu primeiro capturei o maior numero do array para depois pecorre o array e compara com o maior, e assim capturando o segundo maior.
