const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');
const b5 = document.getElementById('b5');
const b6 = document.getElementById('b6');
const b7 = document.getElementById('b7');
const b8 = document.getElementById('b8');
const b9 = document.getElementById('b9');
const clearBtn = document.getElementById('clearBtn');

let currentTurn = "X";

function switchTurns() {
    currentTurn = currentTurn === "X" ? "O" : "X";
};


function inputChecker(e) {
    if (e.target.innerHTML !== "") {
        console.log('input already exist');
    } else {
        if (currentTurn == "X"){
            e.target.innerHTML = `<span class="cross">X</span>`;
        } else {
            e.target.innerHTML = `<span class="dot">O</span>`;
        }
        switchTurns();
        winCondition();
    }
};


b1.addEventListener('click', (e) => {
    inputChecker(e);
});

b2.addEventListener('click', (e) => {
    inputChecker(e);
});

b3.addEventListener('click', (e) => {
    inputChecker(e);
});

b4.addEventListener('click', (e) => {
    inputChecker(e);
});

b5.addEventListener('click', (e) => {
    inputChecker(e);
});

b6.addEventListener('click', (e) => {
    inputChecker(e);
});

b7.addEventListener('click', (e) => {
    inputChecker(e);
});

b8.addEventListener('click', (e) => {
    inputChecker(e);
});

b9.addEventListener('click', (e) => {
    inputChecker(e);
});


clearBtn.addEventListener('click', () => {
    b1.innerHTML = "";
    b2.innerHTML = "";
    b3.innerHTML = "";
    b4.innerHTML = "";
    b5.innerHTML = "";
    b6.innerHTML = "";
    b7.innerHTML = "";
    b8.innerHTML = "";
    b9.innerHTML = "";
    currentTurn = "X";
});

function winCondition() {
    if (b1.innerHTML == b2.innerHTML && b2.innerHTML == b3.innerHTML) {
        console.log(b3.innerHTML + ' wins');
    } else if (b4.innerHTML == b5.innerHTML && b5.innerHTML == b6.innerHTML) {
        console.log(b6.innerHTML + ' wins');
    } else if (b7.innerHTML == b8.innerHTML && b8.innerHTML == b9.innerHTML) {
        console.log(b9.innerHTML + ' wins');
    } else if (b1.innerHTML == b4.innerHTML && b4.innerHTML == b7.innerHTML) {
        console.log(b7.innerHTML + ' wins');
    } else if (b2.innerHTML == b5.innerHTML && b5.innerHTML == b8.innerHTML) {
        console.log(b8.innerHTML + ' wins');
    } else if (b3.innerHTML == b6.innerHTML && b6.innerHTML == b9.innerHTML) {
        console.log(b9.innerHTML + ' wins');
    } else if (b1.innerHTML == b5.innerHTML && b5.innerHTML == b9.innerHTML) {
        console.log(b9.innerHTML + ' wins');
    } else if (b3.innerHTML == b5.innerHTML && b5.innerHTML == b7.innerHTML) {
        console.log(b7.innerHTML + ' wins');
    } else {
        null;
    }
};

