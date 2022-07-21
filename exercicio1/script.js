let nome
let idade

console.log (typeof nome) 
console.log (typeof idade) 

//O console imprimiu o tipo de variavel como undefined, pois não foi atirbuido nenhum valor a elas

nome = prompt ("Qual é o seu nome?")
idade = prompt ("Qual a sua idade?")

console.log (typeof nome)
console.log (typeof idade)

//O console imprimiu o tipo de variavel como string para as duas variaveis, isso por que ao usar o prompt
//tudo o que o usuário responder é recebido como string.

console.log ("Olá !", nome, "você tem", idade, "anos !")

