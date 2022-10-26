var salario, nome, salarioAumen, porcentagemAumento, salarioComAumen
var keep = true
while(keep){
SalarioENome()
CalculePorcentagem()
console.log("Seu nome é ", nome, "seu salario atual é ", salario, "a porcentagem de aumento será de ", porcentagemAumento, "e seu novo salario será ", salarioComAumen)
DesejaContinuar()
}
function SalarioENome() {
    salario = parseInt(prompt("Digite seu salario"))
    nome = prompt("Digite seu nome")

    if(salario < 1500)
{
    porcentagemAumento = 20
}
else if(salario >= 1501 && salario <= 2000)
{
    porcentagemAumento = 15
}
else if(salario >= 2001 && salario <= 3000)
{
    porcentagemAumento = 10
}
else
{
    porcentagemAumento = 5
}
}

function CalculePorcentagem(){
    if(porcentagemAumento == 20){
    salarioAumen = (salario * porcentagemAumento) / 100
    salarioComAumen = salarioAumen + salario
    }
    else if(porcentagemAumento == 15){
    salarioAumen = (salario * porcentagemAumento) / 100
    salarioComAumen = salarioAumen + salario
    }
    else if(porcentagemAumento == 10){
    salarioAumen = (salario * porcentagemAumento) / 100
    salarioComAumen = salarioAumen + salario
    }
    else{
    salarioAumen = (salario * porcentagemAumento) / 100
    salarioComAumen = salarioAumen + salario
    }
}

function DesejaContinuar(continuar){
    var continuar = prompt("Deseja continuar ? Sim ou Nao")
    if(continuar == "Não" || continuar == "Nao"){
    keep = false
    }
    else{
        console.clear()
}
}
