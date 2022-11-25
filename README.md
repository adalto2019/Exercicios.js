# Exercicios.js
Exercícios em Linguagem de Programação JavaScript

***
~~~javascript
    <script>
        //Janela de alerta.
        window.alert('Olá Mundo! Esse é o meu primeiro programa em JavaScript');    
    </script>
~~~

##### Saída
<img src="img1.png" width="350" height="150">

***
#### Operadores Aritiméticos:
(+) Soma<p>
(-) Subtração<p>
(*) Multiplicação<p>
(/) Divisão Real<p>
(%) Divisão Inteira<p>
(**) Potência<p>

<img src="img1.2.png" width="350" height="400">


#### Operadores Relacionais:
(>) Maior..<p>
(<) Menor..<p>
(==) Igual (valores iguais)..<p>
(!=) Diferente..<p>
(>=) Maior ou Igual..<p>
(<=) Menor ou Igual..<p>
(===) Identidade (tipos iguais)..<p>

<img src="img1.3.png" width="350" height="400">


#### Operadores Lógicos:
(&&) Conjunção, situação só é verdadeira se, somente se, as duas proposições forem verdadeiras.<p>
( || ) Disjunção, situação só é verdadeira se, somente se, pelo menos UMA proposição for verdadeira.<p>
( ! ) Negação, nega o resultado apresentado.<p>

<img src="img1.3.png" width="350" height="400">


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
#### Exercícios [3]:
~~~javascript
<!--Crie uma pequena página em HTML que exiba um botão. Quando este botão for clicado, um comando
javaScript deve exibir uma janela de alerta exibindo seu nome.-->
<body>
    <input type="button" value="CliqueAqui" id="btn" onclick="clicar()">
    <script>
       function clicar(){
        window.alert("Olá Adalto Jr!")
       }
    </script>
</body>
~~~

##### Saída
<img src="img2.2.png" width="350" height="400">

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
<style>/*Css do código*/
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
<img src="img.2.3.png" width="350" height="400">

***
~~~javascript
<script> 
        //Recebe ano e informa a qual século ele pertence.
        var n = Number.parseFloat(window.prompt("Digite ano para saber o seu século:"));
        document.write(`O ano digitado foi: ${n}`)
        if (n >= 1 && n <= 100){
            document.write(`<br/> Esse ano pertence ao século I.`)}
        else if(n >= 101 && n <= 200){
        document.write(`<br/> Esse ano pertence ao século II.`)}
        else if(n >= 201 && n <= 300){
        document.write(`<br/> Esse ano pertence ao século III.`)}
        else if(n >= 301 && n <= 400){
        document.write(`<br/> Esse ano pertence ao século IV.`)}
        else if(n >= 401 && n <= 500){
        document.write(`<br/> Esse ano pertence ao século V.`)}
        else if(n >= 501 && n <= 600){
        document.write(`<br/> Esse ano pertence ao século VI.`)}
        else if(n >= 601 && n <= 700){
        document.write(`<br/> Esse ano pertence ao século VII.`)}
        else if(n >= 701 && n <= 800){
        document.write(`<br/> Esse ano pertence ao século VIII.`)}
        else if(n >= 801 && n <= 900){
        document.write(`<br/> Esse ano pertence ao século IX.`)}
        else if(n >= 901 && n <= 1000){
        document.write(`<br/> Esse ano pertence ao século X.`)}
        else if(n >= 1001 && n <= 1100){
        document.write(`<br/> Esse ano pertence ao século XI.`)}
        else if(n >= 1101 && n <= 1200){
        document.write(`<br/> Esse ano pertence ao século XII.`)}
        else if(n >= 1201 && n <= 1300){
        document.write(`<br/> Esse ano pertence ao século XIII.`)}
        else if(n >= 1301 && n <= 1400){
        document.write(`<br/> Esse ano pertence ao século XIV.`)}
        else if(n >= 1401 && n <= 1500){
        document.write(`<br/> Esse ano pertence ao século XV.`)}
        else if(n >= 1501 && n <= 1600){
        document.write(`<br/> Esse ano pertence ao século XVI.`)}
        else if(n >= 1601 && n <= 1700){
        document.write(`<br/> Esse ano pertence ao século XVII.`)}
        else if(n >= 1701 && n <= 1800){
        document.write(`<br/> Esse ano pertence ao século XVIII.`)}
        else if(n >= 1801 && n <= 1900){
        document.write(`<br/> Esse ano pertence ao século XIX.`)}
        else if(n >= 1901 && n <= 2000){
        document.write(`<br/> Esse ano pertence ao século XX.`)}
        else if(n >= 2001 && n <= 2100){
        document.write(`<br/> Esse ano pertence ao século XXI.`)}
    </script>
~~~

##### Saída
<img src="img3.png" width="350" height="150">
<img src="img4.png" width="350" height="150">

***
~~~

~~~


~~~

~~~


## Autor

Adalto Carvalho Ribeiro Simão Jr

