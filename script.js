const prompt = require('prompt-sync')();

var nome = "";
var exp = 0;
var nivel;
var num = 1;

function verificador(nome , exp){
  if (exp <= 1000) {
    nivel = "Ferro";
  } else if (exp <= 2000) {
    nivel = "Bronze";
  } else if (exp <= 5000) {
    nivel = "Prata";
  } else if (exp <= 7000) {
    nivel = "Ouro";
  } else if (exp <= 8000) {
    nivel = "Platina";
  } else if (exp <= 9000) {
    nivel = "Ascendente";
  } else if (exp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Raridade";
  }

  console.log(`o Heroi : ` + nome + ` está no nível ` + nivel);

}

while(num != 0){
  console.clear
  console.log("Classificador de Nível");
  
  nome = prompt("Digite o nome do heroi: ");
  exp = parseInt(prompt("Digite a experiencia do heroi: "));

  verificador(nome, exp)

  console.log("Deseja continuar?")
  console.log("0 - SAIR / 1 - CONTINUAR")
  num = parseInt("Continuar?")
  
}