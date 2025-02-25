const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let IntervalId = null;


const trafficLight = ( event ) => {
    stopAutomatic()
    turnOn[event.target.id]();

}

const turnOn = {
    'red': () => img.src = './image/vermelho.png',
    'green': () => img.src = './image/verde.png',
    'yellow': () => img.src = './image/amarelo.png', 
    'automatic': () => IntervalId = setInterval(changeColor, 1000),
}

const nextIndex = () => {
    if (colorIndex < 2) {
        colorIndex++ 
    } else {
        colorIndex = 0;
    }
}

const stopAutomatic = () => {
    clearInterval(IntervalId)
}

const changeColor = () => {
    const colors = ['red', 'green', 'yellow'];
    const color = colors[ colorIndex ];
    turnOn[color]();
    nextIndex()


}

buttons.addEventListener('click', trafficLight);
