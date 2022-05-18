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
const dynamicImg = document.getElementById('dynamicImg');
const bar = document.getElementById('bar');

const totalTime = 8000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = (totalTime / 5);

breathAnimation();

function breathAnimation() {
    text.innerText = 'Breathe In';
    container.className = 'container grow';
    dynamicImg.src = "./in.png";

    setTimeout(() => {
        text.innerText = 'Hold';
        dynamicImg.src = "./hold.png";
        

        setTimeout(() => {
            text.innerText = 'Breathe Out';
            container.className = 'container shrink';
            dynamicImg.src = "./out.png";

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
    bar.className = 'bar hidden';
};

function switchToLine() {
    circle.className = 'circle hidden';
    pointerContainer.className = 'pointerContainer hidden';
    gradientCircle.className = 'gradientCircle hidden';
    text.className = 'text';
    img.className = 'img hidden';
    iniMsg.className = 'iniMsg hidden';
    bar.className = 'bar ';
};

function switchToImg() {
    circle.className = 'circle hidden';
    pointerContainer.className = 'pointerContainer hidden';
    gradientCircle.className = 'gradientCircle hidden';
    text.className = 'text hidden';
    img.className = 'img';
    iniMsg.className = 'iniMsg hidden';
    bar.className = 'bar hidden';
};



