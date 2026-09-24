/* Exercício 1: Soma dos pares
Dado um array de números, retorne a soma apenas dos números pares.
[1, 2, 3, 4, 5, 6] → 12 */

// eu preciso primerio pegar todos os números pares do array e depois somar.

const nums: number[] = [1, 2, 3, 4, 5, 6];

function somaPares(num: number[]) {
  let result = 0;

  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) result += num[i];
  }
  return result;
}

console.log("Execicio 1");
console.log(somaPares(nums));
console.log("");

//crie uma variavel que inicia com zero, depois usei o for para pecorre todo o array de numeros, e dentro do for usei um if para verificar se o numero era par, se sim ele entrava para a let e soma com o próximo.
