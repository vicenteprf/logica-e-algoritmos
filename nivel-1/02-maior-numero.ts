/* Exercício 2: Maior número
Sem usar Math.max, encontre o maior número de um array.
[3, 9, 2, 7] → 9 */

// preciso pecorre todo o array e ir comparando sempre com o próximo e retorna o maior

const numeros: number[] = [-18, 3, 9, 2, 7];

function numeroMaior(num: number[]) {
  let maior = num[0];

  for (let i = 0; i < num.length; i++) {
    if (maior < num[i]) maior = num[i];
  }
  return maior;
}

console.log("Execicio 2");
console.log(numeroMaior(numeros));
console.log("");

// criei um variavel let que inicia no primeiro indice do array com os numeros que preciso verificar, depois usei o for para pecorre todo o array dos numeros e dentro do for eu utilizei o if para verificar se o numero seguinte e maior, se o numero for maior ele guarda dentro da variavel.
