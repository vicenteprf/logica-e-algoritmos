/*
Exercício 13: Matriz — soma da diagonal

Agora subindo o nível: sua primeira matriz (array de arrays).

Dada uma matriz quadrada (mesmo número de linhas e colunas) de números, retorne a soma dos elementos da diagonal principal (a que vai do canto superior esquerdo ao canto inferior direito).

[
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
]
 → 1 + 5 + 9 = 15

 [
 [2, 0],
 [0, 2]
 ]
 → 4


Requisitos:
1. Entrada: array matriz.
2. Percorrer os índices da matriz para selecionar cada linha por ordem.
3. Acessar o número da diagonal principal usando o mesmo índice da linha.
4. Armazenar e somar o valor selecionado em uma variável de resultado.
5. Retornar a soma dos números selecionados.

*/

const matriz: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matriz2: number[][] = [
  [2, 0],
  [0, 2],
];

const matriz3 = [[7]];

function somaArray(matriz: number[][]) {
  let result: number = 0;

  for (let i = 0; i < matriz.length; i++) {
    result += matriz[i][i];
  }

  return result;
}

console.log("Exercicio 13");
console.log(somaArray(matriz));
console.log(somaArray(matriz2));
console.log(somaArray(matriz3));

// Criei uma função para somar os números em diagonal dos arrays. Dentro da função, criei uma variável let result para receber o resultado final. Em seguida, fiz um for para percorrer cada índice dos arrays e, a cada volta do laço, adicionei e somei na variável result o número onde o índice da linha é igual ao índice da coluna (matriz[i][i]). Por fim, retornei a variável result.
