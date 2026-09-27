/*

Exercício 15: Números primos até N

Dado um número n, retorne um array com todos os números primos de 2 até n (incluindo n, se ele for primo).

n = 10 → [2, 3, 5, 7]
n = 1 → []
n = 2 → [2]

Um número primo é aquele que só é divisível por 1 e por ele mesmo (o 1 não é considerado primo).

Requisitos:
1. Criar e armazenar os numeros primos dentro de uma variavel. -> linha 22
2. Verificar todos os números que vão até num. -> linha 24
3. Percorrer todos os numeros ate chegar no numero num. -> linha 24
4. Verifcar se os numeros são primos, se for verdadeiro armazenar na varaivel. -> linha 25 ate 33
5. Retornar a variável result. -> linha 36
*/

function numeroPrimo(num: number) {
  let result: number[] = [];

  for (let i = 2; i <= num; i++) {
    let primo = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        primo = false;
        break;
      }
    }

    if (primo) result[result.length] = i;
  }

  return result;
}

console.log("Exercicio 15");
console.log(numeroPrimo(10));
console.log(numeroPrimo(1));
console.log(numeroPrimo(2));

// Criei uma função numeroPrimo e, em seguida, criei uma variável result para armazenar todos os números primos. Depois, fiz um laço para percorrer todos os números até o número indicado e criei uma variável booleana para dizer se o número é primo. Após essa variável, fiz outro laço para percorrer os divisores e, dentro desse segundo laço, fiz uma verificação: se o número tiver algum divisor, a variável booleana passa a ser false e o laço é interrompido com break. Se a variável continuar sendo verdadeira, o número é adicionado na variável result, retornando ao final apenas os números primos.
