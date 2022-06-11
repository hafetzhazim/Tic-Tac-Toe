/*  A simple Tic-Tac-Toe game
Players 'X' and 'O' take turn inputing their position on the command line using numbers 1-9
1 | 2 | 3
---------
4 | 5 | 6
---------
7 | 8 | 9
*/

// importing user import library
// missed ({sigint: true});
const prompt = require('prompt-sync')({sigint: true});
do{
let board = {
    1: ' ', 2: ' ', 3: ' ',
    4: ' ', 5: ' ', 6: ' ',
    7: ' ', 8: ' ', 9: ' '
};

// TODO: update the gameboard with the user input
function markBoard(position, mark) {
    if (board[position] = ' ')
    board[position] = mark;
}

// TODO: print the game board as described at the top of this code skeleton
function printBoard() { 
    let drawBoard = {
        1: ' ',
        2: ' ',
        3: ' ',
        4: ' ',
        5: ' ',
        6: ' ',
        7: ' ',
        8: ' ',
        9: ' '
    };


    for (let i in drawBoard){
        if (board[i] == ' '){
        drawBoard[i] = [i];
        } else drawBoard[i] = board[i];
    }

    console.log( '\n' +
    ` ${drawBoard[1]} | ${drawBoard[2]} | ${drawBoard[3]} \n` +
    ' --------- \n' +
    ` ${drawBoard[4]} | ${drawBoard[5]} | ${drawBoard[6]} \n` +
    ' --------- \n' +
    ` ${drawBoard[7]} | ${drawBoard[8]} | ${drawBoard[9]} \n`);
}


// TODO: check for wrong input, this function should return true or false.
// true denoting that the user input is correct
// you will need to check for wrong input (user is entering invalid position) or position is out of bound
// another case is that the position is already occupied
function validateMove(position) {
    let pos = Number(position);

    if (pos >= 1 && pos <= 9) {
        if (board[pos] == ' ') {
            return true;
        }
    }
    return false;
}

// TODO: list out all the combinations of winning, you will neeed this
// one of the winning combinations is already done for you
let winCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

// TODO: implement a logic to check if the previous winner just win
// This method should return with true or false
function checkWin(player) {
    for (let forms of winCombinations) {
        if (board[forms[0]] == player && board[forms[1]] == player && board[forms[2]] == player) {
            return true;
        }
    }
    return false;
}

// TODO: implement a function to check if the game board is already full
// For tic-tac-toe, tie bascially means the whole board is already occupied
// This function should return with boolean
function checkFull() {
    for (let space in board) {
        if (board[space] == ' ') {
            return false;
        }
    }
    return true;
}

// *****************************************************
// Copy all your code/fucntions in Part 1 to above lines
// (Without Test Cases)
// *****************************************************


// TODO: the main part of the program
// This part should handle prompting the users to put in their next step, checking for winning or tie, etc
function playTurn(player) {
    let move = prompt(player+"'s turn, input position:");
    while (validateMove(move) == false){
        console.log ('invalid input!')
        move = prompt(player+"'s turn, input position:");
    }

    markBoard(move, player);
    if (checkWin(player) == true || checkFull()){
        winnerIdentified = true;
    }
}

// entry point of the whole program

console.log('Game started: \n\n' +
    ' 1 | 2 | 3 \n' +
    ' --------- \n' +
    ' 4 | 5 | 6 \n' +
    ' --------- \n' +
    ' 7 | 8 | 9 \n');

let winnerIdentified = false
let currentTurnPlayer = 'X'
while (!winnerIdentified){
    playTurn(currentTurnPlayer);
    printBoard();

    if (winnerIdentified){
        { if (checkWin(currentTurnPlayer) == true){
            console.log(currentTurnPlayer+' Won the game!');
            console.log('Game Finished');
            } else {console.log('Its a tie!');
            console.log('Game Finished');
            }
        }    
    }
    else {if (currentTurnPlayer == 'X'){
        currentTurnPlayer = 'O';
        } else if (currentTurnPlayer == 'O'){
            currentTurnPlayer = 'X';
        }
    }    
}


// Bonus Point: Implement the feature for the user to restart the game after a tie or game over



} while (repeatAgain() == true);

function repeatAgain() {
    let repeat = prompt('Do you want to play again, yes[Y] or no[N] ?');
    while (validateinput(repeat) == false){
        console.log ('invalid input!')
        repeat = prompt('Do you want to play again, yes[Y] or no[N] ?');
    } 

    if (repeat == 'Y'){ 
    return true    
    } else console.log('Bye');
    
}    

function validateinput(answer) {
    if (answer == 'Y' || answer == 'N'){
    return true;
    }
    return false;
}
