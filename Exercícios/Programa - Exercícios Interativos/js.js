//Calcule a média de diversas notas digitadas pelo usuário.
//*********************************************************************************************************************    
function ex01r(){
        var arrayNotas = [] //Array vázio
        let xn = Number(window.prompt("Quantas notas você deseja lançar? ")); //Recebe valor Numerico
        while (xn >= 1){ // Laço de repetição
            xn--;        
            let notas = Number(window.prompt(`Digite nota: `)); //Recebe valor Numerico
            arrayNotas.push(notas);} // Adiciona todas as notas informadas no array vázio
                let soma = arrayNotas.reduce(function(soma, i){ //função 'reduce' para somar os valores dentro do array
                    return soma + i;
                });
        alert('Notas informadas: '+ arrayNotas + ' || A média das notas é: ' + soma / arrayNotas.length)   
    };
    function ex01s(){ // Função que exibe img desse script
        document.write('<img src=img/img.ex1.PNG>')
        document.write('<br>')
        document.write('Recarreque a página para voltar ao início!')
    }
//*********************************************************************************************************************
//Faça um programa que entre com cinco números e imprima o quadrado de cada número.
//*********************************************************************************************************************
function ex02r(){
    for (let i = 1; i < 6; i++){ //Laço for para receber 5 valores numericos
        let n = Number(window.prompt(`Digite o ${i}° numero: `));
        let resultado = n ^ 2; // Varivel de escopo local 'resultado' recebe valor 'n' multiplicado por ele mesmo
        window.alert('O Quadrado do numero digitado é: ' + resultado);
    }
}
function ex02s(){
    document.write('<img src=img/img.ex2.PNG>');
    document.write('<br>');
    document.write('Recarreque a página para voltar ao início!');
}    

//*********************************************************************************************************************
//Solicite ao usuário para digitar 3 números em uma caixa de texto e verifique qual é o maior número e exiba-o.
//*********************************************************************************************************************
function ex03r(){
    window.alert('POR FAVOR, DIGITE 3 NÚMEROS.');
    let n1 =  Number.parseInt(window.prompt('Informe o 1° numero: '));
    let n2 =  Number.parseInt(window.prompt('Informe o 2° numero: '));
    let n3 =  Number.parseInt(window.prompt('Informe o 3° numero: '));
       
    let maior = Number.parseInt(Math.max(n1, n2, n3)); //Método Math.max retorna o maior valor passado como argumento
    // Obs1. Se pelo menos um argumento não puder ser convertido para número, ele retornará 'NaN' 
    window.alert('O Maior numero digitado foi : ' + maior);
    }
function ex03s(){
    document.write('<img src=img/img.ex3.PNG>');
    document.write('<br>');
    document.write('Recarreque a página para voltar ao início!');
}
//*********************************************************************************************************************
//Crie uma calculadora de operações básicas.
//*********************************************************************************************************************
function ex04r(){
    window.alert("CALCULADORA DE OPERAÇÕES BÁSICA");
    let v1 = Number(window.prompt('Digite um valor: '));//receber o primeiro valor
    let v2 = Number(window.prompt('Digite outro valor: '));//recebe o segundo valor
    let Op = window.prompt('Informe a operação que você deseja executar: \n(+) Para Somar \n(-) Para Subtrair \n(x) Para Multiplicar | \n(/) Para Dividir');
    //variável 'op' recebe a operação desejada pelo usuário.
    if (Op == '+' || Op == 'Soma' || Op == 'soma' || Op == 'SOMA'){//estrura cindional 'if' testa a primeira condição.
        let resultado = v1 + v2;
            window.alert('(SOMA) O resultado para operação digitada é: ' + resultado);}
            // se a primeira condição não for satisfeita, se testa os 'else if', em seguência, até satisfazer a condição desejada.
    else if (Op == '-' || Op == 'Subtração' || Op == 'subtração' || Op == 'SUBTRAÇÃO'){
        let resultado = v1 - v2;
            window.alert('(SUBTRAÇÃO) O resultado para operação digitada é: ' + resultado);}
    else if (Op == 'x' || Op == 'Multiplicação' || Op == 'multiplicação' || Op == 'MULTIPLICAÇÃO'){
        let resultado = v1 * v2;
            window.alert('(MULTIPLICAÇÃO) O resultado para operação digitada é: ' + resultado);}
    else if (Op == '/' || Op == 'Divisão' || Op == 'divisão' || Op == 'DIVISÃO'){
        let resultado = v1 / v2;
            window.alert('(DIVISÃO) O resultado para operação digitada é: ' + resultado);}
    else{//se a variável 'op' for digitada fora dos padrões solicitados, retorna-se essa mensagem de erro.
        window.alert('ERRO! verifique a operação informada e tente novamente.');}    
}
function ex04s(){
    document.write('<img src=img/img.ex4.PNG>');
    document.write('<br>');
    document.write('Recarreque a página para voltar ao início!');
}
//*********************************************************************************************************************
//Escreva uma função em JavaScript que realize a conversão de uma temperatura fornecida em graus Fahrenheit(F) para Celsius(C).
//*********************************************************************************************************************
function ex05r(){
    let g = Number(window.prompt('Informe a temperatura em  F° a ser covertida: '));//Recebe valor a ser convertido.
    if (g){
    let calc = ((g-32) * 5/9);//Fórmula que converte F° em C°.
    window.alert('A temperatura convertida em C° é: ' + calc.toFixed(2));//Retorna valor convertido em C°.
}
else{
   window.alert('ERRO, o valor não é númerico. Tente Novamente !!');
    }
}
function ex05s(){
    document.write('<img src=img/img.ex5.PNG>');
    document.write('<br>');
    document.write('Recarreque a página para voltar ao início!');
}
//*********************************************************************************************************************
//Crie um programa que entre com os dados de altura e sexo de 5 pessoas. Imprima na tela quantas pessoas são do sexo masculino 
//e quantas pessoas são do sexo feminino. Mostre também qual é a maior altura e se essa altura é de um homem ou uma mulher.
//*********************************************************************************************************************
function ex06r(){
let altF = 0;
let altM = 0;
let qtdF = 0;
let qtdM = 0;
for (let i = 1; i < 6; i++){
    let sexo = prompt(`Digite o sexo da ${i}° Pessoa: (M ou F)`);//Variável recebe a String 'M' ou 'F'
    let altura = Number(prompt(`Digite altura da ${i}° Pessoa:`));//Variável recebe valores da altura
    if (sexo === "F"){//condicional comparando tipos iguais 
        qtdF++; //contador de sexo 'F'
        if (altura > altF){//'if' aninhado 
            altF = altura;}} 
        else if (sexo === "M"){
        qtdM++;
        if (altura > altM){
            altM = altura;
        }}}
alert(`Qtd de  mulheres infromada: ${qtdF} \n Qtd de homens informado: ${qtdM}`);
if (altF > altM){
    alert(`A maior altura é de uma Mulher.`);}
else{
    alert(`A maior altura é de um Homem.`);}
}    
function ex06s(){
    document.write('<img src=img/img.ex6.PNG>');
    document.write('<br>');
    document.write('Recarreque a página para voltar ao início!');
}
//*********************************************************************************************************************
//Escreva uma função em JavaScript que conte quantos caracteres aparece em um texto
//*********************************************************************************************************************
function ex07r(){
let txt = window.prompt('Digite o seu texto/Frase: ');
let tamCaract = txt.length;
window.alert('A quantidade e caracteres digitadas foram: ' + tamCaract);
}
function ex07s(){
    document.write('<img src=img/img.ex7.PNG>');
    document.write('<br>');
    document.write('Recarreque a página para voltar ao início!');
}
//*********************************************************************************************************************
