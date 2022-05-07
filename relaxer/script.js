const iniMsg = document.getElementById('iniMsg');
const container = document.getElementById('container');
const text = document.getElementById('text');
const circleBtn = document.getElementById('circleBtn');
const lineBtn = document.getElementById('lineBtn');
const imageBtn = document.getElementById('imageBtn');
const circle = document.getElementById('circle');
const pointerContainer = document.getElementById('pointerContainer');
const gradientCircle = document.getElementById('gradientCircle');
const img = document.getElementById('img');


const totalTime = 8000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = (totalTime / 5);

breathAnimation();

function breathAnimation() {
    text.innerText = 'Breathe In';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breathe Out';
            container.className = 'container shrink';

        }, holdTime);
    }, breatheTime);
};

setInterval(breathAnimation, totalTime);

circleBtn.addEventListener('click', () => {
    switchToCircle();
});

lineBtn.addEventListener('click', () => {
    switchToLine();
});

imageBtn.addEventListener('click', () => {
    switchToImg();
});

function switchToCircle() {
    circle.className = 'circle';
    pointerContainer.className = 'pointerContainer';
    gradientCircle.className = 'gradientCircle';
    text.className = 'text';
    img.className = 'img hidden';
    iniMsg.className = 'iniMsg hidden';
};

function switchToLine() {
    circle.className = 'circle hidden';
    pointerContainer.className = 'pointerContainer hidden';
    gradientCircle.className = 'gradientCircle hidden';
    text.className = 'text hidden';
    img.className = 'img hidden';
    iniMsg.className = 'iniMsg hidden';
};

function switchToImg() {
    circle.className = 'circle hidden';
    pointerContainer.className = 'pointerContainer hidden';
    gradientCircle.className = 'gradientCircle hidden';
    text.className = 'text hidden';
    img.className = 'img';
    iniMsg.className = 'iniMsg hidden';
};



