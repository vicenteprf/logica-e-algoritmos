/*
Exercício 9: Contar vogais
Dada uma palavra ou frase, retorne quantas vogais ela tem.
"banana" → 3
"Casa" → 2
"xyz" → 0
*/

function contarVogais(palavra: string): number | string {
  const formatarPalavra = palavra.toLowerCase();
  const vogais = ["a", "e", "i", "o", "u"];
  let contagemVogais: number = 0;

  if (!formatarPalavra.trim()) return "Nenhuma palavra foi digitada.";
  else {
    const separar = formatarPalavra.split("");

    for (let i = 0; i < separar.length; i++) {
      for (let j = 0; j < vogais.length; j++) {
        if (separar[i] === vogais[j]) {
          contagemVogais += 1;
          break;
        }
      }
    }
  }

  return contagemVogais;
}

console.log("Execicio 9");
console.log(contarVogais("banana"));
console.log(contarVogais("casa"));
console.log(contarVogais("xyz"));
console.log(contarVogais(""));
console.log(contarVogais("   "));
console.log("");

//Primeiro eu faço a formatação da palavra para deixar toda minuscula
//Faço a verificação se foi digitado alguma palavra, se não foi eu aviso que nenhuma palavra foi digita.
//depois eu faço a separação da palavra em um array.
//ai em seguinda eu faço a comparação da palavra divida em array caso a verificação for verdadeira eu somo mais um.
