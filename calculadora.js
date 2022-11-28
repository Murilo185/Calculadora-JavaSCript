let n1 = Number(prompt('Insira um número'))
let n2 = Number(prompt('Insira outro número'))
let resultado = 0

let operacao = prompt('qual operação você quer fazer?').toUpperCase()

if (operacao == 'SOMA'){
    resultado = soma(n1, n2)
}else if (operacao == 'SUBTRAÇÃO'){
    resultado = sub(n1, n2)
}else if (operacao == 'DIVISÃO'){
    resultado = div(n1, n2)
}else if (operacao == 'MULTIPLICAÇÃO'){
    resultado = multi(n1, n2)
}

function soma(n1, n2){
    return n1 + n2
}

function sub(n1, n2){
    return n1 - n2
}

function div(n1, n2){
    return n1 / n2
}

function multi(n1, n2){
    return n1 * n2
}

alert(resultado)