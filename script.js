// const gameFlow = {
    //here is the game flow
//}

const cells = document.querySelectorAll(".cell");

function Gameboard(){
    const board = [];

    for(let i=0; i<3; i++) {
        board[i] = [];
        for(let j=0; j<3;j++) {
            board[i][j] = i.toString() + j.toString();
        }
    }
    const getBoard = () => board;

    return {getBoard};
}

// function render() {

// }


const players = {
    playerA: "X",
    playerB: "O",
    playerTurn: 'playerA',
    switch: () => { players.playerTurn == "playerA" ? players.playerTurn = "playerB" : players.playerTurn = "playerA"
        // if (players.playerTurn == "playerA") {
        //     players.playerTurn = "playerB";
        // } else {
        //     players.playerTurn = "playerA";
        // }
    }
};


const boardT = [[11, 12, 13],
              [21, 22, 23],
              [31, 32, 33]];

let playerAMoves = [];
let playerBMoves = [];


function playerMove(row, col) {
    
    if(checkOcupied(row,col)) {
        alert("This cell already contains a value, please selec a different cell.");
        return;
    };
    if (players.playerTurn == "playerA") {
        playerAMoves.push([row, col]);
    } else {
        playerBMoves.push([row, col]);
    };
    players.switch();
    //console.log(boardT)
}

// check if the option was selected before
function checkOcupied(row, col) {
    let allPlayerMoves = playerAMoves.concat(playerBMoves);
    for (let arr of allPlayerMoves) {
        if((row == arr[0]) && (col == arr[1])) {
            return true;
        };
    };
};


// There are 3 possibilities for a winner. Check if there is a player who sutisfies one of them.


function isWinner(arr) {
    let sum = 0;
    let sum2 = 0;
    let sum3 = 0;

    for(const a of arr) {
        //check case 1: rol=col 
        if(a[0] == a[1]) {
            sum += 1;
        };
        for(const b of arr) { // check case 2: same col
            if(a[1] == b[1]) {
                sum2 += 1;
            } 
            if (a[0] == b[0]) { // check case 3: same row
                sum3 += 1;
            };
        };

        // if one of the cases is true, reture true
        if((sum2 == 3) || (sum3 == 3)) {
            return true;
        } else {
            sum2 = 0;
            sum3 = 0;
        };
        if (sum == 3) {
            return true;
        }
    }
}

// let test = [[1,1],[2,2],[0,0],[1,2]]
// let test2 = [[1,1],[1,2],[1,0],[2,2]]
// let test3 = [[1,2],[0,2],[0,2],[1,1]]
// let test4 = [[1,1],[1,2]]