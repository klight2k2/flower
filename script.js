onload = () => {
    const c = setTimeout(() => {
        document.querySelector('.not-loaded').classList.remove('not-loaded');
        clearTimeout(c);
    }, 1000);
};

function rain() {
    let cloud = document.querySelector('html');
    let e = document.createElement('div');

    e.classList.add('drop');
    cloud.appendChild(e);

    let left = Math.floor(Math.random() * 290);
    let size = Math.round() * 1.5;
    let duration = Math.random() * 1;

    const windowWidth = window.innerWidth ; // trừ kích thước của box
    const windowHeight = window.innerHeight ; // trừ kích thước của box

    const randomX = Math.random() * windowWidth;
    const randomY = Math.random() * windowHeight;


    e.innerText = '🩵';
    e.style.left = randomX + 'px';
    e.style.top = randomY + 'px';
    e.style.fontSize = 0.5 + size + 'em';
    e.style.animationDirection = 20 + duration + 's';

    setTimeout(function () {
        cloud.removeChild(e);
    }, 2000);
}

rain();
setInterval(function () {
    rain();
}, 20);
