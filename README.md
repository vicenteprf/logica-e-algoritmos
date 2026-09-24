# Lógica de Programação e Algoritmos

Repositório de exercícios que venho praticando para desenvolver
raciocínio lógico e resolução de problemas, como apoio ao meu
aprendizado em desenvolvimento web (JS, TypeScript, React, Node.js).

## Objetivo

Sei usar o ecossistema JavaScript, mas queria fortalecer a lógica
por trás do código: decompor problemas, testar casos-limite e
escrever soluções que eu realmente entendo, não só que funcionam.

## Como estudo cada exercício

1. Escrevo os requisitos do enunciado antes de codar.
2. Implemento a solução.
3. Testo os exemplos do enunciado + casos estranhos (vazio,
   negativos, repetidos).
4. Confiro se cada requisito tem uma linha de código correspondente.

## Exercícios

| #   | Exercício                  | Conceitos praticados                                                                                                     |
| --- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 01  | Soma dos pares             | Loop, condicional, acumulador                                                                                            |
| 02  | Maior número               | Comparação em loop, escolher valor inicial correto (usar o próprio primeiro elemento, não um "chute" como 0)             |
| 03  | Contador de palavras       | Objeto como dicionário (chave dinâmica), padrão "já existe? soma : cria"                                                 |
| 04  | Estoque mínimo             | Filtro + sort + extração de campo, ordem correta das etapas (filtrar → ordenar → extrair)                                |
| 05  | Palíndromo                 | Manipulação de string (toLowerCase, reverse), normalização antes de comparar                                             |
| 06  | Remover duplicados sem Set | Loop aninhado, flag booleana ("já visto?"), busca manual em array                                                        |
| 07  | Segundo maior              | Duas variáveis dependentes, ordem das atribuições importa (if / else if excludentes)                                     |
| 08  | Estoque por categoria      | Combinação de soma (ex. 1) + agrupamento por chave (ex. 3), duas versões (array vs objeto)                               |
| 09  | Contar vogais              | Loop aninhado com break, tratamento de casos vazios/só espaço (trim), decisão de tipo de retorno                         |
| 10  | FizzBuzz                   | Múltiplas condições que se sobrepõem, ordem dos if/else if importa quando há mais de uma regra válida                    |
| 11  | Ímpares ao quadrado        | Filtro + transformação + sort, comportamento do operador`%` com números negativos                                        |
| 12  | Nomes formatados           | Combinação de trim, verificação de tamanho, capitalização (toUpperCase/toLowerCase) e ordenação de texto (localeCompare) |
| 13  | Matriz — soma da diagonal  | Introdução a matriz (array de arrays), identificar quando um loop único basta (índice de linha = índice de coluna)       |

## Tecnologias

TypeScript, Node.js

## Como rodar

\`\`\`bash
npx tsx nome-do-arquivo.ts
\`\`\`
