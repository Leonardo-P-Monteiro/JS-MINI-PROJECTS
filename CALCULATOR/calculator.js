'use strict';


const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*=operador]');

let novoNumero = true;
let input1; // numeroAnterior
let input2;
let operador;

const operacaoPendente = () => {
    operador != undefined;
    return operador
}

const calcular = () => {
    // if (operacaoPendente()) {
    //     const input2 = parseFloat(display.textContent);
    //     novoNumero = true;
    //     const resultado = eval(`${input1}${operador}${input2}`); // Evitar usar isso, pois abre brechas de segurança.
    //     atualizarDisplay(resultado);
    // } Não deixei utilizando esse trecho acima por que é má prática.
    if (operacaoPendente()){
        input2 = parseFloat(display.textContent.replace(',','.'));
        novoNumero = true
        if (operador == '+') {
            atualizarDisplay(input1 + input2);
        } else if (operador == '-') {
            atualizarDisplay(input1 - input2);
        } else if (operador == '*') {
            atualizarDisplay(input1 * input2);
        } else if (operador == '/') {
            atualizarDisplay(input1 / input2);
        } 
    }
};

const atualizarDisplay = (texto) => {
    if (novoNumero){
        display.textContent = texto.toLocaleString('BR');
        novoNumero = false;
    } else {
        display.textContent += texto.toLocaleString('BR');
    }
};

const inserirNumero = (evento) => {
    atualizarDisplay(evento.target.textContent);
};

numeros.forEach(numero => numero.addEventListener('click', inserirNumero));
//Isso dentro do .forEach é uma arrow function. 

function selecionarOperador (event) { 
    if (!novoNumero){
        calcular();
        novoNumero = true;
        operador = event.target.textContent;
        input1 = parseFloat(display.textContent.replace(',','.'));
    }
}

operadores.forEach(operador => operador.addEventListener('click', selecionarOperador));

const ativarIgual = () => {
    calcular();
    novoNumero = true;
    operador = undefined
};

document.getElementById('igual').addEventListener('click', ativarIgual);

function limparDisplay () {
    display.textContent = '';
};

document.getElementById('limparDisplay').addEventListener('click', limparDisplay);

const limparCalculo = () => {
    operador = undefined;
    novoNumero = true;
    input1 = undefined;
    limparDisplay();
}

document.getElementById('limparCalculo').addEventListener('click', limparCalculo);

const removerUltimoNumero = () => {
    display.textContent = display.textContent.slice(0, -1);
};

document.getElementById('backspace').addEventListener('click', removerUltimoNumero);

function inverterSinal () {
    novoNumero = true
    atualizarDisplay(display.textContent * -1)
};

document.getElementById('inverter').addEventListener('click', inverterSinal);

const existeDecimal = () => {
    return display.textContent.indexOf(',') != -1;
};

const existeValor = () => {
    return display.textContent.length > 0;
};

const inserirDecimal = () => {
    if (!existeDecimal()){
        if (existeValor()) {
            atualizarDisplay(',')
        } else {
            atualizarDisplay('0,')
        }
    }
}

document.getElementById('decimal').addEventListener('click', inserirDecimal);

const mapaTeclado = {
    '0' : 'tecla0',
    '1' : 'tecla1',
    '2' : 'tecla2',
    '3' : 'tecla3',
    '4' : 'tecla4',
    '5' : 'tecla5',
    '6' : 'tecla6',
    '7' : 'tecla7',
    '8' : 'tecla8',
    '9' : 'tecla9',
    '+' : 'operadorAdicionar',
    '-' : 'operadorSubtrair',
    '*' : 'operadorMultiplicar',
    '/' : 'operadorDividir',
    'c' : 'limparCalculo',
    'Backspace' : 'backspace',
    'Enter' : 'igual',
    ',' : 'decimal',
};

const mapearTeclado = (evento) => {
    const tecla = evento.key;
    console.log(tecla)
    const teclaPermitida = () => {
        return Object.keys(mapaTeclado).indexOf(tecla) != -1;
    };
    if (teclaPermitida) {
        document.getElementById(mapaTeclado[tecla]).click();
    };
};

document.addEventListener('keydown', mapearTeclado);

console.log()