/*
Exercício 5: dada uma palavra, diga se ela é igual lida de trás para frente.
"arara" → true | "casa" → false
Depois, faça ignorar maiúsculas: "Ana" → true. 
*/

function palindromo(palavra: string) {
  const palavraMinuscula = palavra.toLowerCase();
  const palavraReversa = palavraMinuscula.split("").reverse().join("");

  return palavraMinuscula === palavraReversa;
}

console.log("Execicio 5");
console.log(palindromo("Arara"));
console.log(palindromo("casa"));
console.log("");

// primerio eu armazenei a frase dentro de uma variavel e transfomei toda a palavra em minusculo e depois criei outra variavel para inverter a primeira variavel, e depois eu retornei a função fazendo uma verificação de true ou false
