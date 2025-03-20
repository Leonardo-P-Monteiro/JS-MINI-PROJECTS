'use strict';


const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*=operador]');

let novoNumero = true;
let input1; // numeroAnterior
let operador;

const operacaoPendente = () => {
    operador != undefined;
    return operador
}

const calcular = () => {
    if (operacaoPendente()){
        const input2 = parseFloat(display.textContent);
        novoNumero = true
        if (operador == '+') {
            atualizarDisplay(input1 + input2);
        }
    }
}

const atualizarDisplay = (texto) => {
    if (novoNumero){
        display.textContent = texto;
        novoNumero = false;
    } else {
        display.textContent += texto;
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
        input1 = parseFloat(display.textContent);
    }
}

operadores.forEach(operador => operador.addEventListener('click', selecionarOperador));


// Paramos no minuto 31:40 = https://www.youtube.com/watch?v=oRZQ5EZOrQk&list=PLDgemkIT111AzoS1rB61sgMJbsEA4pyD2&index=7
