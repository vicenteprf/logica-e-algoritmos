/*
Exercício 17 (revisado): Inverter cada palavra

Dada uma frase, inverta cada palavra individualmente, mas mantenha a ordem das palavras na frase.

"bola gato casa"  →  "aloB otag asac"

Espera, deixa eu ajustar o exemplo certo:

"bola gato casa"  →  "alob otag asac"
"Ola Mundo"        →  "alO odnuM"
""                 →  ""

Esse é bem mais tranquilo: você já fez palíndromo (reverter string) e contador de palavras (separar frase em array). Aqui é só juntar as duas coisas: separar, reverter cada pedaço, juntar de novo.
*/

const matriz: string = "bola gato casa";
const matriz2: string = "Ola Mundo";
const matriz3: string = "";

function inverterPalavra(palavra: string) {
  const separar = palavra.split(" ");
  let result: string[] = [];

  for (let i = 0; i < separar.length; i++) {
    const palavraInvertida = separar[i].split("").reverse().join("");

    result.push(palavraInvertida);
  }

  return result;
}

console.log("Exercicio 17");
console.log(inverterPalavra(matriz));
console.log(inverterPalavra(matriz2));
console.log(inverterPalavra(matriz3));

// Primeiro, peguei a frase e usei .split(" ") para separar cada palavra por espaço, depois, para conseguir inverter as letras de cada palavra individualmente, peguei cada uma, transformei em um array de caracteres com .split(""), inverti com .reverse() e juntei as letras de volta com .join(""), mandei cada palavra já invertida para dentro do meu array de resultados usando .push(), Por fim, usei o .join(" ") no array final para juntar todas as palavras invertidas de volta em uma frase só, separada por espaços.
