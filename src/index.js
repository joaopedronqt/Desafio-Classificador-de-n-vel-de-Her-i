var nomePersonagem = prompt("Digite o nome do personagem: ")
let mensagemInicio = "O Heroi "
let mensagemFinal = " está no nivel de "
var quantidadeXPHeroi = parseInt(prompt("Qual o XP do Personagem"));

if (quantidadeXPHeroi < 1000 ) {   
    quantidadeXPHeroi = "Ferro"  
} else if (quantidadeXPHeroi > 1000 && quantidadeXPHeroi <= 2000){
    quantidadeXPHeroi = "Bronze"
} else if (quantidadeXPHeroi > 2000 && quantidadeXPHeroi <= 6000){ 
    quantidadeXPHeroi = "Prata"
} else if (quantidadeXPHeroi > 6000 && quantidadeXPHeroi <= 7000){ 
    quantidadeXPHeroi = "Ouro"
} else if (quantidadeXPHeroi > 7000 && quantidadeXPHeroi <= 8000){
    quantidadeXPHeroi = "Platina"
} else if (quantidadeXPHeroi > 8000 && quantidadeXPHeroi <= 9000){ 
    quantidadeXPHeroi = "Ascendente"
} else if (quantidadeXPHeroi > 9000 && quantidadeXPHeroi <= 10000){
    quantidadeXPHeroi = "Imortal"
} else {
    quantidadeXPHeroi = "Radiante"
}


console.log(mensagemInicio + nomePersonagem + mensagemFinal + quantidadeXPHeroi);



