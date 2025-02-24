const img = document.getElementById('img');
const buttons = document.getElementById('buttons');

const trafficLight = ( event ) => {
    turnOn[event.target.id]();

}

const turnOn = {
    'red': () => img.src = './image/vermelho.png',
    'green': () => img.src = './image/verde.png',
    'yellow': () => img.src = './image/amarelo.png',    
}


buttons.addEventListener('click', trafficLight);
