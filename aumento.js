var salario, nome, salarioAumen, porcentagemAumento

console.log(SalarioENome())
console.log(CalculePorcentagem())

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
return salario, nome, porcentagemAumento
}

function CalculePorcentagem()
{
    if(porcentagemAumento == 20){
    salarioAumen = (salario * 20) / 100
    salario = salarioAumen + salario
    }
    else if(porcentagemAumento == 15){
    salarioAumen = (salario * 15) / 100
    salario = salarioAumen + salario
    }
    else if(porcentagemAumento == 10){
    salarioAumen = (salario * 10) / 100
    salario = salarioAumen + salario
    }
    else{
    salarioAumen = (salario * 5) / 100
    salario = salarioAumen + salario
    }
}
