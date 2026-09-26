/*

Exercício 14: Matriz — soma de cada linha

Dada uma matriz de números (não precisa ser quadrada), retorne um array com a soma de cada linha.

[[1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]]
 → [6, 15, 24]

 [[10, 20],
 [1],
 [5, 5, 5]]
 → [30, 1, 15]


Requisitos:
1. Entrada: array matriz (number[][]). -> linha 32
2. Percorrer os índices da matriz para selecionar cada linha por ordem. -> linha 38
3. Percorrer os elementos (colunas) da linha atual utilizando number[i].length para somar todos os seus valores. -> linha 41
4. Armazenar a soma calculada de cada linha no array de resultado. -> linha 42
5. Retornar a variável resultado. -> linha 47
*/

const matriz: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matriz2: number[][] = [[10, 20], [1], [5, 5, 5]];
const matriz3: number[][] = [[-10, 20], [], [5, -3]];

function somaDasLinha(number: number[][]) {
  let result: number[] = [];

  for (let i = 0; i < number.length; i++) {
    let soma = 0;

    for (let j = 0; j < number[i].length; j++) {
      soma += number[i][j];
    }
    result[result.length] = soma;
  }

  return result;
}

console.log("Exercicio 14");
console.log(somaDasLinha(matriz));
console.log(somaDasLinha(matriz2));
console.log(somaDasLinha(matriz3));

// Criei a função 'somaDasLinha' que recebe uma matriz de números e retorna um array com a soma de cada linha. Inicializei a variável 'result' como um array vazio para guardar os totais. Utilizeil um laço 'for' externo para percorrer cada linha da matriz e defini a variável 'soma' com valor 0. Em seguida, utilizei um laço 'for' interno que percorre as colunas da linha atual (number[i].length) somando todos os seus elementos, inclusive negativos. Adicionei o resultado de cada linha ao final do array 'result' e, por fim, retornei a variável 'result'.
