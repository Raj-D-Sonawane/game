let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const userScorePara = document.getElementById('user-score');
const compScorePara = document.getElementById('comp-score');
const msgPara = document.getElementById('msg');

const genCompChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
};

const drawGame = () => {
    msgPara.textContent = "It's a Draw!";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.textContent = userScore;
        msgPara.textContent = `You Win! ${userChoice} beats ${compChoice}`;
    } else {
        compScore++;
        compScorePara.textContent = compScore;
        msgPara.textContent = `You Lose! ${compChoice} beats ${userChoice}`;
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (
            (userChoice === 'rock' && compChoice === 'paper') ||
            (userChoice === 'paper' && compChoice === 'scissors') ||
            (userChoice === 'scissors' && compChoice === 'rock')
        ) {
            userWin = false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
