/*
Exercício 4: Um problema do seu passado em logística
Você tem uma lista de produtos com nome e quantidade em estoque. Escreva a lógica para retornar apenas os nomes dos produtos com estoque abaixo de 5 unidades, ordenados do menor para o maior estoque.
*/

//vou pecorre a lista e verificar qual produto tem menos de 5 unidades e colocar dentro de uma novo array.

interface Produto {
  nome: string;
  quantidade: number;
}

const produtos: Produto[] = [
  { nome: "Teclado Mecânico", quantidade: 15 },
  { nome: "Mouse Gamer", quantidade: 3 },
  { nome: "Monitor 24", quantidade: 8 },
  { nome: "Notebook", quantidade: 5 },
  { nome: "Fone de Ouvido", quantidade: 25 },
  { nome: "Webcam Full HD", quantidade: 1 },
  { nome: "Cadeira Ergonômica", quantidade: 4 },
  { nome: "Mousepad Extra Grande", quantidade: 40 },
  { nome: "Suporte para Monitor", quantidade: 18 },
  { nome: "Cabo HDMI 2.0", quantidade: 50 },
];

function verificarEstoque(estoque: Produto[]) {
  let estoqueMin: Produto[] = [];

  for (let i = 0; i < estoque.length; i++) {
    if (estoque[i].quantidade < 5) estoqueMin.push(estoque[i]);
  }

  estoqueMin.sort((a, b) => a.quantidade - b.quantidade);

  let nomes: string[] = [];
  for (let i = 0; i < estoqueMin.length; i++) {
    nomes.push(estoqueMin[i].nome);
  }

  return nomes;
}

console.log("Execicio 4");
console.log(verificarEstoque(produtos));
console.log("");

//criei uma variavel para armazenar os produtos abaixo de cinco unidades, usei o for para percorre a variavel com o produtos, dentro do for eu verifiquei se a quantidade e menor que cinco, se der verdadeiro ela armazena dentro da variavel de estoqueMin, depois ordenei a variavel de estoqueMin em ordem de quantidade, e em seguinda criei uma variavel para armazenar os nomes dos produtos, depois sai pecorrendo todas a variavel de estoqueMin com o for e armazenei só os nomes dos produtos.
