// constants 

const gameBoard = [ 
    0, 0, 0, 
    0, 0, 0, 
    0, 0, 0
];

let turn = 1;

const cellIds = document.querySelectorAll('div');

cellIds.forEach((e) => {
    e.onclick = (e) => {
        const cellId = document.querySelector(`#${e.currentTarget.id}`);
        if (turn % 2 === 1) {
          cellId.textContent = 'X';
          cellId.style.pointerEvents = 'none'
        } else {
          cellId.textContent = 'O';
          cellId.style.pointerEvents = 'none'
        }      
        gameBoard[parseFloat(e.currentTarget.id[e.currentTarget.id.length - 1])] =
					cellId.textContent;
        turn += 1;
}
})

const checkForWinner = () => {
    if (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2] && typeof gameBoard[0] === 'string') {return;}
    if (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5] && typeof gameBoard[3] === 'string') {return;}
    if (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8] && typeof gameBoard[6] === 'string') {return;}
    if (gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6] && typeof gameBoard[0] === 'string') {return;}
    if (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7] && typeof gameBoard[1] === 'string') {return;}
    if (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8] && typeof gameBoard[2] === 'string') {return;}
	if (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8] && typeof gameBoard[0] === 'string') {return;}
	if (gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6] && typeof gameBoard[2] === 'string') {return;}
}

checkForWinner();