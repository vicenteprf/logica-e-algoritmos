/*

Dada uma frase, retorne a palavra que mais aparece. Ignore diferença entre maiúsculas e minúsculas, e devolva a palavra em minúsculo. Se houver empate, retorne a que apareceu primeiro na frase. Se a frase for vazia, retorne null.

"o gato viu o rato e o gato fugiu"  →  "o"
"Sol sol lua"                       →  "sol"
"b a b a"                           →  "b"   (empate: b apareceu primeiro)
""                                  →  null

Requisitos:
1. Criar uma função para verificar todas as strings. -> linha 
2. Separar as string e uma variavel. -> linha 
3. Criar uma variavel para armazenar a string. -> linha 
4. Percorre a a variavel com as string separadas e contar qual aparece mais. -> linha 
5. Fazer uma condição para caso der empate vence a que aparaceu primeiro. -> linha 
6. Retorna a variavel com a string. -> linha 
*/

const matriz: string = "o gato viu o rato e o gato fugiu";
const matriz2: string = "Sol sol lua";
const matriz3: string = "b a b a";
const matriz4: string = "";

function verificarPalavra(palavra: string) {
  const fraseSeparada = palavra.toLowerCase().split(" ");
  let contagem: { [key: string]: number } = {};
  let maior: number = 0;
  let result: string = "";

  if (!palavra.trim()) return null;

  for (let i = 0; i < fraseSeparada.length; i++) {
    const palavra = fraseSeparada[i];

    if (contagem[palavra]) contagem[palavra] += 1;
    else contagem[palavra] = 1;

    if (contagem[palavra] > maior) {
      maior = contagem[palavra];
      result = palavra;
    }
  }

  return result;
}

console.log("Exercicio 16");
console.log(verificarPalavra(matriz));
console.log(verificarPalavra(matriz2));
console.log(verificarPalavra(matriz3));
console.log(verificarPalavra(matriz4));

// Criei uma função verificarPalavra e, em seguida, fiz uma verificação inicial para retornar null caso a palavra seja vazia ou contenha apenas espaços. Depois, transformei a string em minúsculas e a separei em um array de palavras com split. Criei um objeto contagem para armazenar a frequência das palavras, uma variável maior para registrar o número máximo de ocorrências e uma variável result para guardar a palavra mais frequente. Fiz um laço para percorrer o array e, para cada palavra, incrementei a contagem no objeto. Dentro do mesmo laço, fiz uma verificação: se a contagem da palavra atual for maior que o valor armazenado em maior, atualizo o valor de maior e atribuo a palavra à variável result. Por fim, a função retorna a variável result com a palavra mais frequente.
