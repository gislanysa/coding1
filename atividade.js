/*crie um pragrama que declare uma var chamada nome, uma var chamada idade e 
imprima a mensagem "olá, meu nome é {nome} e tenho {idade} anos"*/

let nome = 'Gislany';
let idade = 25;
console.log (`Olá, meu nome é ${nome} e tenho ${idade} anos.`);

/*crie um programa que declare uma var para nome e para cidade, 
armazene as informações do tipo string em var e imprima uma mensagem 
personalizada, como: '{nome} é de {cidade}'*/

let Nome = 'Arthur';
let cidade = 'Recife';
console.log (`Olá, meu nome é ${Nome} e sou de ${cidade}.`);

/*crie um programa  que declare duas var numericas num1 e num2, e 
realize as quatro operações básicas e imprima os resultados*/ 

let num1 = 100;
let num2 = 50;
console.log (`A soma de ${num1} + ${num2} é: ${num1 + num2}, a subtração é: ${num1 - num2}, a multiplicação é: ${num1 * num2} e a divisão é: ${num1 / num2}`);

/*declare duas var numericas: base e altura, armazene nas var a base e altura de um triangulo,
calcule a área e exiba o resultado*/

let base = 10;
let altura = 25;
console.log(`A área do triangulo com base: ${base} e altura: ${altura} é: ${base * altura / 2}.`);

/*declare var para inserir 3 notas de um aluno, crie uma var chamada media e nela
deve conter o calculo de media das 3 notas, exiba o resultado da media, informando a nota final*/

let n1 = 10;
let n2 = 7;
let n3 = 9;
let media = n1 + n2 + n3 / 3;
console.log(`O resultado da média é ${media}.`);

/*crie um programa que calcule o valor final de um produto com desconto, as var devem informar o preço original,
e o percentual de desconto, exiba o resultado*/

let valorInicial = 50;
let desconto = 15;
let valorFinal = valorInicial - (valorInicial * desconto / 100);
console.log(`O valor final do produto com desconto de ${desconto}% é: ${valorFinal}.`);

/*simule um cálculo simplificado de imposto de renda, considerando uma tabela de alíquotas,
a var deve informar o salário bruto, exiba o resultado*/


let salarioBruto = 4664.68;
let salarioLiquido = 0;

if (salarioBruto > 4664.68) {
    salarioLiquido = salarioBruto - (salarioBruto * 0.275)
} else if (salarioBruto > 3751.06){
    salarioLiquido = salarioBruto - (salarioBruto * 0.225)
} else if (salarioBruto > 2826.66){
    salarioLiquido = salarioBruto - (salarioBruto * 0.15)
} else if (salarioBruto > 2259.21) {
    salarioLiquido = salarioBruto - (salarioBruto * 0.75)
} else {
    salarioLiquido=salarioBruto
}
console.log (`Para uma pessoa com um salario bruto de ${salarioBruto} apos a aplicação de imposto de renda recebera um salario liquido de ${salarioLiquido.toFixed(2)}`)

/*crie um conversor de moedas, considerando taxas de cambio atualizadas, as var devem guardar o valor das moedas inicial e final,
exiba o resultado*/

let valorReal = 100;
let cambio = 5.46
let valorDolar = valorReal / cambio
console.log(`O valor de ${valorReal} reais em dolar é ${valorDolar.toFixed(2)}`)


/* crie uma var para a temperatura em celsius e faça a conversão para fahrenheit usando a formula
(celsius * 9/5) + 32, exiba o resultado */

let celsius = 28;
let fahrenheit = (celsius * 9/5) + 32;
console.log(`A conversão da temperatura ${celsius} graus celsius para fahrenheit é: ${fahrenheit}.`);

/*crie var para peso (em kg) e altura (em metros) calcule o IMC utilizando a formula: IMS= peso/ (altura * altura)), exiba o resultado.*/

let peso = 58;
let Altura = 1.63;
let imc = peso / (Altura * Altura);
console.log(`O IMC de uma pessoa pesando ${peso}kg e com a altura de ${Altura}m é: ${imc.toFixed(2)}.`);