// # 1️⃣ Desafio Classificador de nível de Herói

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000 = Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

// Desafio Classificador de Nível de Herói

let nickname = "Galadriel"

console.log("Que bom te ver de volta, " + nickname + "!")

let xpHeroi = 15632

if(xpHeroi <= 1000){
    console.log("A heroína de nome " + nickname + " está no nível: Ferro. É isso aí!")
}else if(xpHeroi > 1001 && xpHeroi <= 2000){
    console.log("A heroína de nome " + nickname + " está no nível: Bronze. É isso aí!")
}else if(xpHeroi > 2001 && xpHeroi <= 5000){
    console.log("A heroína de nome " + nickname + " está no nível: Prata. É isso aí!")
}else if(xpHeroi > 5001 && xpHeroi <= 7000){
    console.log("A heroína de nome " + nickname + " está no nível: Ouro. É isso aí!")
}else if(xpHeroi > 7001 && xpHeroi <= 8000){
    console.log("A heroína de nome " + nickname + " está no nível: Platina. É isso aí!")
}else if(xpHeroi > 8001 && xpHeroi <= 9000){
    console.log("A heroína de nome " + nickname + " está no nível: Ascendente. É isso aí!")
}else if(xpHeroi > 9001 && xpHeroi <= 10000){
    console.log("A heroína de nome " + nickname + " está no nível: Imortal. É isso aí!")
}else if(xpHeroi >= 10001){
    console.log("A heroína de nome " + nickname + " está no nível: Radiante. É isso aí!")
}