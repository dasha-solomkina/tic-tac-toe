// const gameFlow = {
    //here is the game flow
//}

const cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        let cellChosen = cell.classList[1].toString(); // these one can be an object
        let rowChosen = cellChosen.slice(0,1);
        let colChosen = cellChosen.slice(1,2);
        playerMove(rowChosen, colChosen);
        markMove(cell);
        players.playerTurn == "playerA" ? isWinner(players.playerAMoves) : isWinner(players.playerBMoves);
        alertWinner()
        players.switch();
    })
})

// testing the function to fill in the cell

function markMove(cell) {
    players.playerTurn == "playerA" ? cell.classList.add('x') : cell.classList.add('o');
};



const players = {
    playerAName: "Player One",
    playerBName: "Player Two",
    playerTurn: 'playerA',
    playerAMoves: [],
    playerBMoves: [],
    winnerDefined: false,
    switch: () => { players.playerTurn == "playerA" ? players.playerTurn = "playerB" : players.playerTurn = "playerA";
    }
};



function playerMove(row, col) {
    if(checkOcupied(row,col)) {
        alert("This cell already contains a value, please select a different cell.");
        return;
    };
    if (players.playerTurn == "playerA") {
        players.playerAMoves.push([row, col]);
    } else {
        players.playerBMoves.push([row, col]);
    };
    
}

// check if the option was selected before
function checkOcupied(row, col) {
    let allPlayerMoves = players.playerAMoves.concat(players.playerBMoves);
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
            players.winnerDefined = true;
        } else {
            sum2 = 0;
            sum3 = 0;
        };
        if (sum == 3) {
            players.winnerDefined = true;
        }
    }
}

function alertWinner() {
    if(players.winnerDefined == true) {
        alert('Player ' + players.playerTurn + ' won');
    }
}



// let test = [[1,1],[2,2],[0,0],[1,2]]
// let test2 = [[1,1],[1,2],[1,0],[2,2]]
// let test3 = [[1,2],[0,2],[0,2],[1,1]]
// let test4 = [[1,1],[1,2]]