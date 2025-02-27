


const images = [
    {'id':'1', 'url':'./image/image-1.jpg'},
    {'id':'2', 'url':'./image/image-2.jpg'},
    {'id':'3', 'url':'./image/image-3.jpg'},
    {'id':'4', 'url':'./image/image-4.jpg'},
    {'id':'5', 'url':'./image/image-5.jpg'},
    {'id':'6', 'url':'./image/image-6.jpg'},
    {'id':'7', 'url':'./image/image-7.jpg'}
]

const container = document.querySelector('#container-items');

const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
            <div class='item'>
                <img src="${image.url}">
            </div>
            `
    });
}

loadImages(images, container)