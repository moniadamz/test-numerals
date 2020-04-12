# Numerais Romanos
Resolução do Kata Roman Numerals que pode ser encontrado nesse link: http://codingdojo.org/kata/RomanNumerals/ .

## Tecnologias:
 - NodeJS v12.16.1 e Typescript v3.8.3

## Como funciona:
- O console espera uma entrada do usuário em uma função recursiva, para que não seja necessário rodar o projeto novamente a cada entrada. O loop é interrompido com a palavra "exit";
- Ao receber a entrada, a aplicação verifica se é do tipo inteiro ou string e direciona para os respectivos métodos de tratamento;
- São aceitos numerais acima de zero e menores que quatro mil;

## Como buildar:
-  É nessário executar o comando ```npm install```. Execute também ```npm install typescript -g``` caso não tenha o typescript no PATH do computador.  Após, execute ```tsc```.

## Como testar:
- ``` npm run test ```

## Como executar:
- ``` node build/src/index.js ```
