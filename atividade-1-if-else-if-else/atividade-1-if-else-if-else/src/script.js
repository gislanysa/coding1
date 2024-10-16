let nome = prompt("Digite o nome do aluno");
let idade = prompt("Digite a idade do aluno");
let peso = prompt("Digite o peso do aluno");
let experiencia = prompt("O aluno já treinou antes? Responda com 'sim' ou 'não':");

let mensagemExperiencia;

if (experiencia == 'sim') {
  mensagemExperiencia = "O aluno já tem experiência de treino. ";
} else if (experiencia == 'não') {
  mensagemExperiencia = "O aluno é iniciante. "
} else {
  mensagemExperiencia = "Resposta inválida sobre a experiência. "
}

if (idade <18) {
  mensagemExperiencia = mensagemExperiencia + "O aluno precisa de autorização para treinar";
} else if (idade >60) {
  mensagemExperiencia = mensagemExperiencia = "O aluno precisa de acompanhamento médico";
} else {
  mensagemExperiencia = mensagemExperiencia + "O aluno pode treinar sem autorização"
}

console.log ("Ficha de cadastro de aluno");
console.log(`${nome}`);
console.log(`${idade}`);
console.log(mensagemExperiencia);

