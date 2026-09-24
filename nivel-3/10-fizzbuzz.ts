/*
Exercício 10: FizzBuzz

Dado um número n, retorne um array com os números de 1 até n, mas com estas trocas:

Se o número for múltiplo de 3, coloque "Fizz" no lugar dele.
Se for múltiplo de 5, coloque "Buzz".
Se for múltiplo de 3 e de 5 ao mesmo tempo, coloque "FizzBuzz".
Nos outros casos, mantenha o próprio número.
*/

function verificacao(n: number): (number | string)[] {
  let result: (number | string)[] = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result[i - 1] = "FizzBuzz";
    } else if (i % 3 === 0) result[i - 1] = "Fizz";
    else if (i % 5 === 0) result[i - 1] = "Buzz";
    else result[i - 1] = i;
  }

  return result;
}

console.log(verificacao(5));
console.log(verificacao(15));

//Criei uma função de verificação que recebe um número limite n. Dentro dela, criei a variável result como um array para guardar e retornar a resposta final. Em seguida, fiz um laço for que começa em 1 e vai até o número n (inclusive). A cada volta do laço, testo o número atual: se for múltiplo de 3 e 5 ao mesmo tempo, guardo 'FizzBuzz' no array; se for só de 3, guardo 'Fizz'; se for só de 5, guardo 'Buzz'; e se não for nenhum deles, guardo o próprio número i. Uso i - 1 como índice para preencher o array a partir da posição 0. Por fim, retorno o array result preenchido.
