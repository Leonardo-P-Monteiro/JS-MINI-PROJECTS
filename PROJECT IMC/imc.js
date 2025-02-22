const calcular = document.getElementById('calcular')

function imc () {

    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if (nome !== '' && altura !== '' && peso !== '') {
        
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'You are below the weight.';
        } else if (valorIMC < 25) {
            classificacao = 'You are with the ideal weight.';
        } else if (valorIMC < 30) {
            classificacao = 'You are bit above of the weight.';
        } else if (valorIMC < 35) {
            classificacao = 'You are obesity level I.';
        } else if (valorIMC < 40) {
            classificacao = 'You are obesity level II.';
        } else {
            classificacao = 'You are obesity level III. Careful!';
        }
        

        resultado.textContent = `${nome}, your IMC is ${valorIMC}. ${classificacao}`;

    } else {
        resultado.textContent = 'Fill out all of the fields!';
    }

}

calcular.addEventListener('click', imc);














const nome1 = document.getElementById('nome')
/* playing with the code */
document.write(nome1.value)
