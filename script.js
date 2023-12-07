// const gameFlow = {
    //here is the game flow
//}

const players = {
    playerA: "X",
    playerB: "O",
    playerTurn: 'playerA',
    switch: () => {
        if (players.playerTurn == "playerA") {
            players.playerTurn = "playerB";
        } else {
            players.playerTurn = "playerA";
        }
    }
};


const board = [[11, 12, 13],
              [21, 22, 23],
              [31, 32, 33]];

let playerAMoves = [];
let playerBMoves = [];


function playerMove(row, col) {
    //check if ocupied, if not
    if (players.playerTurn == "playerA") {
        board[row][col] = players.playerA; // actually it is not needed
        playerAMoves.push([row, col]);
        // here add to the player A library
    } else {
        board[row][col] = players.playerB; // actually it is not needed
        playerBMoves.push([row, col]);
    };
    players.switch();
    console.log(board)
}

// check if the option was selected before
function checkOcupied(row, col) {
    let allPlayerMoves = playerAMoves.concat(playerBMoves);
    for (let arr of allPlayerMoves) {
        if((row == arr[0]) && (col == arr[1])) {
            return true;
        }
    }
}


// function to check for the winner

function checkWinnerTest(arr) {
    //checks for the case 3 - when row=col
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i][0] == arr[i][1]) {
            sum += 1;
        };
    };
    return sum;
}

// add the case 1 and 2, for equal rows and column
// join the solutions later 

//for the columns
function checkWinnerTest2 (arr) {
    let sum2 = 0;
    for(const a of arr) {
        for(const b of arr) {
            if(a[1] == b[1]) {
                sum2 += 1;
            }
        }
        //here I can make it one line
        if(sum2== 3) {
            return sum2
        } else {
            sum2 = 0;
        }
    }
}