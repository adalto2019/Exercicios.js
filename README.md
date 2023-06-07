# Exercicios.js
Exercícios em Linguagem de Programação JavaScript

***
~~~javascript
    <script>
        //Janela de alerta.
        window.alert('Olá Mundo! Esse é o meu primeiro programa em JavaScript');    
    </script>
~~~

***
#### Operadores Aritiméticos:
(+) Soma<p>
(-) Subtração<p>
(*) Multiplicação<p>
(/) Divisão Real<p>
(%) Divisão Inteira<p>
(**) Potência<p>

<img src="img/img1.2.png" width="350" height="400">

#### Operadores Relacionais:
(>) Maior..<p>
(<) Menor..<p>
(==) Igual (valores iguais)..<p>
(!=) Diferente..<p>
(>=) Maior ou Igual..<p>
(<=) Menor ou Igual..<p>
(===) Identidade (tipos iguais)..<p>

<img src="img/img1.3.png" width="350" height="400">


#### Operadores Lógicos:
(&&) Conjunção, situação só é verdadeira se, somente se, as duas proposições forem verdadeiras.<p>
( || ) Disjunção, situação só é verdadeira se, somente se, pelo menos UMA proposição for verdadeira.<p>
( ! ) Negação, nega o resultado apresentado.<p>

<img src="img/img1.3.png" width="350" height="400">


***
#### Exemplos de Métodos: 
~~~javascript
<script>
     toString() // Converter dado para string
     Number.parseInt() // Converte dado para inteiro
     Number.parseFloat() // Converte dado para ponto flutuante
    .length() // Conta caracteres
    .toUpperCase() // Converter para MAIÚSCULO 
    .toLowerCase() // Converter para minúsculo
    .toFixed(2) // Adicionar 2 casas decimais
    .toFixed().replace('.',',') // Troca ponto por virgula
    .toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) // Exibe valor em monetário
</script>
~~~

***
#### Exemplos de Métodos de Manipulação de Arrays: 
~~~javascript
<script>    
    .length // Mostra o tamanho do array
    .push('declarando o item ser inserido') // Acrescenta item ao fim de uma array(lista)
    .pop() // Exclui o último item do array(lista)
    .shift() // Apaga o primeiro item de um array(lista)
    .unshift('declarando o item a ser inserido') // Adiciona um item ao inicio de array(lista)
    .reverse() // Inverte os itens de um array. Exibe os itens de forma decrescente.
</script>
~~~
      
***
#### Exercícios [06]:

***
~~~javascript
<body>
<!--Crie uma página que solicite ao usuário que ele escreva uma string; armazene em uma
variável chamada “texto”.
– Se a frase tiver entre 1 e 10 caracteres, a página deve exibir a frase “O texto é pequeno”.
– Se a frase tiver entre 11 e 20 caracteres, a página deve exibir a frase “O texto é médio”.
– Se a frase tiver entre 21 e 30 caracteres, a página deve exibir a frase “O texto é grande”.
– Para qualquer outo tamanho de frase, a página deve exibir a frase “Não vou contar o tamanho da
frase”.-->
<form style="text-align:center; margin-top: 200px">
    <input type="text" id="txt">
    <input type="button" value="Botão" onclick="conta()">
    <div id="msn" style="margin-top:20px">Mensagem..</div>
</form>    
    <script>
        var texto = document.getElementById("txt")
        function conta(){
            var text1 = String(texto.value)
            //text1.length - Método conta numero de caracteres
            if (text1.length <= 10){
                msn.innerText = "O texto é pequeno"
            }
            else if(text1.length >= 11 && text1.length <= 20){
                msn.innerText = "O texto é medio"
            }
            else if(text1.length >= 21 && text1.length <= 30){
                msn.innerText = "O texto é medio"
            }
            else{
                msn.innerText = "Não vou contar o tamanho da frase"
            }
        }
    </script>
</body
~~~
***
~~~javascript
<script>
    //Escreva uma função em Javascript que receba como parâmetro de entrada um array
    //contendo um conjunto de N números inteiros, e retorne como resposta o menor valor
    //do array e a soma de todos os valores do array.--> 
        var n = Number(window.prompt("Digite um numero inteiro"))
        var array = []//array vazio
        array.push(n)//adicionando o valor mencionado pelo usuário no array
        var x = window.prompt("Que adicionar outro numero? s/n")
        while (x == 's'){//laço while incrementa valores inteiros até o usuário mencionar não
            var n = Number(window.prompt("Digite um numero inteiro"))    
            array.push(n)
            var x = window.prompt("Que adicionar outro numero? s/n")    
        }
        var soma = 0
        var mininmo = Math.min(...array)//método para retornar o menor numero informado
        for (var i = 0; i < array.length; i++){
            soma += array[i]
        }
        window.alert('Os valores inteiros adicionados no array foram: '+ array)
        window.alert('Valor mínimo é: '+ mininmo +'. Os valores somados totaliza: ' + soma);    
</script>
~~~

***
~~~javascript
<!--Criando uma Calculadora OnLine-->
<body>
    <form>
        <h2>Calculadora Online</h2>
        <h4>Digite um valor (numerador):</h4>
        <input type="number" name="n1" id="n1"><br>
        <h4>Digite outro valor (divisor):</h4>
        <input type="number" name="n2" id="n2">
        
        <h4>Escolha o operação a ser realizada:</h4>
        <input type="button" id="btn" value="Somar" onclick="somar()"> <!--Chama a função ao clicar-->
        <input type="button" id="btn" value="Subtrair" onclick="subtração()"> 
        <input type="button" id="btn" value="Multiplicar" onclick="multiplicação()"> 
        <input type="button" id="btn" value="Dividir" onclick="divisão()"> 
        <p>! Para calcular raiz ou potêcia só digite o primeiro valor (numerador)</p>
        <input type="button" id="btn" value="Raiz" onclick="raiz()"> 
        <input type="button" id="btn" value="Potência" onclick="potencia()"> 
        <p></p>
        <div id="resultado">Resultado..</div>
        <p></p>
        <input type="reset" value="Resetar"> 
    </form>
   <script>
        var tn1 = (window.document.getElementById("n1")) //Atribui ID a variavél 'tn1'
        var tn2 = (window.document.getElementById("n2"))
        var res = window.document.getElementById("res")
            
        function somar(){
            var n1 = Number(tn1.value) //Atribui o valor da varivel 'tn1' em conversão numerica para uma nova variavél 'n1'
            var n2 = Number(tn2.value)
            var s = n1 + n2
            resultado.innerHTML = `A Soma de ${n1} e ${n2} é: ${s}` 
        } 
        function subtração(){
            var n1 = Number(tn1.value)
            var n2 = Number(tn2.value)
            var s = n1 - n2
            resultado.innerHTML = `A Subtração de ${n1} e ${n2} é: ${s}`
        }
        function multiplicação(){
            var n1 = Number(tn1.value)
            var n2 = Number(tn2.value)
            var s = n1 * n2
            resultado.innerHTML = `A Multiplicação de ${n1} e ${n2} é: ${s}`
        }
        function divisão(){
            var n1 = Number(tn1.value)
            var n2 = Number(tn2.value)
            var s = n1 / n2
            resultado.innerHTML = `A Divisão de ${n1} e ${n2} é: ${s}`
        }
        function raiz(){
            var n1 = Number(tn1.value)
            var s = Math.sqrt(n1)
            resultado.innerHTML = `A Raiz Quadrada de ${n1} é: ${s}`
        }
        function potencia(){
            var n1 = Number(tn1.value)
            var s = n1 ** n1
            resultado.innerHTML = `A Potência de ${n1} é: ${s}`
        }
   </script>
<br>
</body>
~~~ 

~~~css
<style>/*Css Interno do Código*/
        body{background-color: rgb(124, 129, 124);
            text-align: center;
            color: aliceblue;
            }
        h2{font-size: 50px;
            }
        #btn:hover{font-size: 20px;
            border-radius: 10px;
            color: brown;
            transition: 0.5s;
            opacity: 0.7;
            background-color: yellow;
            }
        #resultado{font-size: 30px;
        }        
</style>
~~~

##### Saída
<img src="img/Calculadora.png" width="350" height="400">

***
***
~~~javascript
<script>
        //Faça um programa que entre com o nome e o salário de um funcionário e 
        //mostre seu novo salário, sabendo que o mesmo teve um aumento de 10%.
        var nome = window.prompt("Digite o seu nome: ")
        var salario = Number(window.prompt("Informe o seu salario: "))
        var novoSal = (salario*0.10)+salario
        window.alert("Olá " + nome + ", o seu salário acrescido de 10% passa a ser: R$" + novoSal)
</script>
~~~

***

~~~javascript
<script>
    //Nesta prova você deve criar um jogo de adivinhação em javascript.O jogo deve ter os seguintes requerimentos:
    //1- O computador deve sortear um número entre 1 e 10
    //2- Deve ser aberto um prompt de comando onde é solicitado que o usuário digite um número entre 1 e 10
    //3- O usuário tem 3 tentativas para acertar o número, caso erre deve ser mostrado pelo alerta quantas tentativas ele possui
    //4-Caso o usuário não acerte deve mostrar no alerta a frase “Você perdeu o número era X” onde X é o número sorteado.
    //5-Caso o usuário acerte deve mostrar no alerta a frase “Acertou parabéns” e parar a execução
    
    for (var i = 2; i >= 0; i--) {//Laçode repetição: enquanto 'i'  maior que '0', decrementa um.(repete 3x) 
        var U = window.prompt("Escolha um numero de 1 a 10.")//Pede valor ao usuário.
        var M = Math.floor((Math.random()*10) + 1)//Método para sortear números de 1 a 10.
        window.alert("A Máquina Sorteou o N°: " + M)//Exibe essa mensagem.
        //Condicional, se verdadeira para com o 'Break', se não continua até finalizar o laço.
        if (U == M){
            window.alert("ACERTOU PARABÉNS!!")
            break
        }
        else{
            window.alert(`Você Perdeu o Número era ${M}. Você tem ${i} Tentativas.`)
        }
     }    
    </script>
~~~


## Autor

Adalto Carvalho Ribeiro Simão Jr

