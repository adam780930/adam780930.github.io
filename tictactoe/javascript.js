const playerX = 'cross';
const playerO = 'circle';
const cellBlocks = document.querySelectorAll('[cell-item]');
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const currentTurn = document.getElementById('currentTurn');
const clearBtn = document.getElementById('clearBtn');
let playerOTurn = false;

startGame();

function startGame() {
    playerOTurn = false;
    const currentClass = playerOTurn ? playerO : playerX;
    cellBlocks.forEach(cell => {
        cell.classList.remove(playerX);
        cell.classList.remove(playerO);
        cell.removeEventListener('click', handlePlayerInput);
        cell.addEventListener('click', handlePlayerInput, { once: true });
    });
    currentTurn.innerText = `${currentClass}'s turn`;
};

function handlePlayerInput(e) {
    const cell = e.target;
    const currentClass = playerOTurn ? playerO : playerX;
    const currentTurnDisplay = playerOTurn ? playerX : playerO;
    placeMark(cell, currentClass);
    if (winnerCheck(currentClass)) {
        endGame(false);
    } else if (drawGame()) {
        endGame(true);
    } else {
        swapTurns();
        currentTurn.innerText = `${currentTurnDisplay}'s turn`;
    }
};

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
};

function swapTurns() {
    playerOTurn = !playerOTurn;
};

function winnerCheck(currentClass) {
    return winConditions.some(combination => {
        return combination.every(index => {
            return cellBlocks[index].classList.contains(currentClass);
        })
    })
};

function drawGame() {
    return [...cellBlocks].every(cell => {
        return cell.classList.contains(playerX) || cell.classList.contains(playerO)
    })
};

function endGame(drawGame) {
    if (drawGame) {
        currentTurn.innerText = "Draw";
    } else {
        currentTurn.innerText = `${playerOTurn ? "circle" : "cross"} wins!`;
    }
    cellBlocks.forEach(cell => {
        cell.removeEventListener('click', handlePlayerInput);
    });
};

clearBtn.addEventListener('click', startGame);

