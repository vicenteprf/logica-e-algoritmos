/*
Exercício 12: Nomes formatados

Dada uma lista de nomes, retorne só os que têm mais de 3 letras, com a primeira letra maiúscula e o resto minúsculo, em ordem alfabética.

["ana", "CARLOS", "bia", "joão", "MARIA"] → ["Carlos", "João", "Maria"]
["li", "bo"] → []

Requisitos:
1. Entrada: array de string.
2. Verificar se tem espaços nos nomes. linha 31.
3. Manter só os nomes com mais de três letras. linha 33
4. Transformar primeira letra em maiúscula e deixar o resto minúsculo. linha 34
5. Ordenar em ordem alfabética. linha 42
6. Devolver um novo array. linha 42
7. Se não houver nomes acima de três letras (ou o array for vazio), devolver [].
*/

const nomes: string[] = ["ana", "CARLOS", "bia", "joão", "MARIA"];
const nomes2: string[] = ["li", "bo"];
const nomes3: string[] = ["AnA", "CAIO "];
const nomes4: string[] = [" ", "    "];

function verificarNomes(nome: string[]) {
  const nomesFiltrados: string[] = [];
  let indiceFiltrado = 0;

  for (let i = 0; nome[i] !== undefined; i++) {
    const nomeAtual = nome[i];

    if (nome[i].trim()) {
      let parseNameFilter = nomeAtual.trim();
      if (parseNameFilter.length > 3) {
        nomesFiltrados[indiceFiltrado] =
          parseNameFilter[0].toUpperCase() +
          parseNameFilter.slice(1).toLowerCase();
        indiceFiltrado++;
      }
    }
  }

  return nomesFiltrados.sort((a, b) => a.localeCompare(b));
}

console.log("Exercicio 12");
console.log(verificarNomes(nomes));
console.log(verificarNomes(nomes2));
console.log(verificarNomes(nomes3));
console.log(verificarNomes(nomes4));

// Criei uma função para verificar os nomes. Em seguida, criei duas variáveis: uma const para armazenar todos os nomes filtrados e uma variável let para controlar o índice do novo array. Depois criei um laço for para percorrer a lista de nomes e criei a variável nomeAtual para guardar o nome da iteração. Fiz uma validação usando .trim() para verificar se o nome não é apenas espaço em branco e para remover os espaços sobressalentes nas pontas, salvando o resultado em parseNameFilter. Em seguida, fiz uma condição: se o tamanho de parseNameFilter for maior que 3, a variável nomesFiltrados recebe o nome tratado no indiceFiltrado. O tratamento é feito pegando a primeira letra (no índice zero) para transformá-la em maiúscula e somando com o restante do nome já em minúsculo. No retorno da função, devolvo a variável nomesFiltrados já em ordem alfabética utilizando .sort() com localeCompare().
