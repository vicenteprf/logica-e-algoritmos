/*
Exercicio 8: Estoque por categoria (logística), dada uma lista { nome, categoria, quantidade }, retorne o total de unidades por categoria.
[{nome:"Mouse", categoria:"Periféricos", quantidade:3}, {nome:"Monitor", categoria:"Telas", quantidade:8}, {nome:"Teclado", categoria:"Periféricos", quantidade:15}]
→ { Periféricos: 18, Telas: 8 }
Este mistura o ex. 1 (somar) com o ex. 3 (agrupar por chave).
*/

interface Produto {
  nome: string;
  quantidade: number;
  categoria: string;
}

interface Categoria {
  quantidade: number;
  categoria: string;
}

const produtos: Produto[] = [
  { nome: "Teclado Mecânico", quantidade: 15, categoria: "Periféricos" },
  { nome: "Mouse Gamer", quantidade: 3, categoria: "Periféricos" },
  { nome: "Monitor 24", quantidade: 8, categoria: "Monitores e Vídeo" },
  { nome: "Notebook", quantidade: 5, categoria: "Computadores" },
  { nome: "Fone de Ouvido", quantidade: 25, categoria: "Áudio" },
  { nome: "Webcam Full HD", quantidade: 1, categoria: "Periféricos" },
  {
    nome: "Cadeira Ergonômica",
    quantidade: 4,
    categoria: "Móveis e Escritório",
  },
  { nome: "Mousepad Extra Grande", quantidade: 40, categoria: "Acessórios" },
  { nome: "Suporte para Monitor", quantidade: 18, categoria: "Acessórios" },
  { nome: "Cabo HDMI 2.0", quantidade: 50, categoria: "Cabos e Conectividade" },
];

function estoqueCategoria(produtos: Produto[]) {
  let categoriaEstoque: Categoria[] = [];

  for (let i = 0; i < produtos.length; i++) {
    let jaExiste = false;
    for (let j = 0; j < categoriaEstoque.length; j++) {
      if (produtos[i].categoria === categoriaEstoque[j].categoria) {
        jaExiste = true;
        categoriaEstoque[j].quantidade += produtos[i].quantidade;
        break;
      }
    }

    if (!jaExiste) {
      categoriaEstoque[categoriaEstoque.length] = {
        categoria: produtos[i].categoria,
        quantidade: +produtos[i].quantidade,
      };
    }
  }

  return categoriaEstoque;
}

console.log("Execicio 8");
console.log(estoqueCategoria(produtos));
console.log("");

// Percorro cada produto da lista. Para cada um, procuro a categoria dele
// no array de resultados (categoriaEstoque).
//
// Caso 1: a categoria JÁ existe no resultado.
//   Marco jaExiste como true, somo a quantidade do produto à quantidade
//   que a categoria já tem (+=) e paro a busca com break.
//
// Caso 2: a categoria AINDA NÃO existe.
//   Adiciono uma nova categoria ao resultado, e a quantidade do produto
//   vira o valor inicial dela (não tem nada para somar ainda).
