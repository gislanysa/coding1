let nome = prompt("Digite seu nome: ")
let satisfacao = prompt("Em uma escala de 1 a 5, onde 1 é totalmente insatisfeito e 5 é totalmente satisfeito, como você avalia o nosso atendimento? ")

if (satisfacao == 5) {
  console.log(`Muito obrigada, ${nome}! estamos felizes que você gostou do nosso atendimento.`);
} else if (satisfacao == 4) {
  console.log(`Obrigada, ${nome}! que bom que você gostou, estamos sempre buscando melhorar nosso atendimento.`);
} else if (satisfacao == 3) {
  console.log(`Obrigada pelo seu feedback ${nome}! vamos nos esforçar para melhorar.`);
} else if (satisfacao == 2) {
  console.log(`Obrigada pelo feedback, ${nome}! que pena que não conseguimos lhe proporcionar uma boa experiência vamos melhorar nisso. `)
} else if (satisfacao == 1) {
  console.log(`Lametamos muito pela experiência negativa ${nome},iremos trabalhar para melhorar isso.`)
} else {
  console.log(`A nota inserida é inválida ${nome}. Por favor insira uma nota de 1 a 5.`)
}

  
