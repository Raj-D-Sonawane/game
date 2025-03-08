let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-game-btn');
let winnerMessage = document.querySelector('#winner-message');

let turnO = true; // O starts first

const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], 
    [0,3,6], [1,4,7], [2,5,8], 
    [0,4,8], [2,4,6]
];

// Function to handle box click
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

// Function to check winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== '' && pos1 === pos2 && pos2 === pos3) {
            announceWinner(pos1);
            return;
        }
    }

    // Check for draw (optional)
    if ([...boxes].every(box => box.innerText !== '')) {
        announceWinner('Draw');
    }
};

// Function to announce winner
const announceWinner = (winner) => {
    if (winner === 'Draw') {
        winnerMessage.innerText = "It's a Draw!";
    } else {
        winnerMessage.innerText = `Player ${winner} Wins!`;
    }
    disableAllBoxes();
    newGameBtn.style.display = 'inline-block';
};

// Disable all boxes after game ends
const disableAllBoxes = () => {
    boxes.forEach(box => box.disabled = true);
};

// Reset button logic (reset anytime)
resetBtn.addEventListener('click', resetGame);

// New Game button logic (only after someone wins)
newGameBtn.addEventListener('click', resetGame);

// Reset Game function
function resetGame() {
    boxes.forEach(box => {
        box.innerText = '';
        box.disabled = false;
    });
    turnO = true;
    winnerMessage.innerText = '';
    newGameBtn.style.display = 'none';
}
