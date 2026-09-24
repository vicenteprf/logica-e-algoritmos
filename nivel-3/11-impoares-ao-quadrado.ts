/*
Exercício 11: Ímpares ao quadrado
Dado um array de números, retorne um novo array só com os números ímpares, cada um elevado ao quadrado, ordenados do maior para o menor.

[1, 2, 3, 4, 5] → [25, 9, 1]
[6, 4, 8] → []
[] → []

Requisitos:
1. Entrada: array de números (pode ser vazio, pode ter negativos e zero).
2. Manter só os números ímpares.
3. Elevar cada ímpar ao quadrado.
4. Ordenar do maior para o menor.
5. Devolver um novo array.
6. Se não houver ímpares (ou o array for vazio), devolver [].

*/

const numbers: number[] = [1, 2, 3, 4, 5];
const numbers2: number[] = [6, 4, 8];
const numbers3: number[] = [];
const numbers4: number[] = [-5, -2, -1, 0, 1, 3, 6, 7];

function imparAoQuadrado(number: number[]) {
  let result: number[] = [];

  for (let i = 0; i < number.length; i++) {
    if (!(number[i] % 2 === 0)) result.push(number[i] ** 2);
  }

  return result.sort((a, b) => b - a);
}

console.log("Exercicio 11");
console.log(imparAoQuadrado(numbers));
console.log(imparAoQuadrado(numbers2));
console.log(imparAoQuadrado(numbers3));
console.log(imparAoQuadrado(numbers4));

//criei uma função para verificar se os numeros são impares, dentro da função criei um variavel chamada result para receber somentes os numeros impares ao quadrado, depois, fiz um for para percorre todo o array dos numeros, e dentro do for eu fiz uma condição se o numero for diferente de par, ele vai ser feito o calculo dele ao quadrado e armazenado dentro da variavel result e assim vai retorna o que em ordem decrescente.
