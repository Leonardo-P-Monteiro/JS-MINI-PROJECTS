'use strict';


const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*=operador]');

let novoNumero = true

const atualizarDisplay = (texto) => {
    if (novoNumero){
        display.textContent = texto
        novoNumero = false
    } else {
        display.textContent += texto
    }
};

const inserirNumero = (evento) => {
    atualizarDisplay(evento.target.textContent);
};

numeros.forEach(numero => numero.addEventListener('click', inserirNumero));
//Isso dentro do .forEach é uma arrow function. 

function selecionarOperador () {
    novoNumero = true
}

operadores.forEach(operador => operador.addEventListener('click', selecionarOperador));


// Paramos no minuto 20:40 = https://www.youtube.com/watch?v=oRZQ5EZOrQk&list=PLDgemkIT111AzoS1rB61sgMJbsEA4pyD2&index=7

