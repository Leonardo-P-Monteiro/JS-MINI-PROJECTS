const turnOnOff = document.getElementById('turnOnOff');
// const turnOff = document.getElementById('turnoff');
const lamp = document.getElementById('lamp')

function isLampBroken() {
    return lamp.src.indexOf('broken') > -1
}

function lampOn() {
    if (!isLampBroken()){
        lamp.src = './image/on.jpg';
    }
}

function lampOff() {
    if (!isLampBroken()){
    lamp.src = './image/off.jpg';
    }
}

function lampBroken() {
    lamp.src = './image/broken.jpg';
}

function lampOnOff() {
    if (turnOnOff.textContent === 'Turn On') {
        lampOn();
        turnOnOff.textContent = 'Turn Off';
    } else {
        lampOff();
        turnOnOff.textContent = 'Turn On'
    }
}

turnOnOff.addEventListener('click', lampOnOff);
// turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);

