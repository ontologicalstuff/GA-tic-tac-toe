// constants 

const holder =  {
    b: [ 
    0, 0, 0, 
    0, 0, 0, 
    0, 0, 0
],
    turn: 1,
};

const mainBoard = document.querySelector('main');
const cellIds = document.querySelectorAll('div');
const newGameBtn = document.querySelector('button');
const displayMessage = document.querySelector('h1');

mainBoard.addEventListener('click', () => {
    if (checkForWinner()) {
	cellIds.forEach(cell => cell.style.pointerEvents = 'none');
    }
});

cellIds.forEach((e) => {
    e.onclick = (e) => {
        const cellId = document.querySelector(`#${e.currentTarget.id}`);
        if (holder.turn % 2 === 1) {
          cellId.textContent = 'X';
          cellId.style.pointerEvents = 'none';
          displayMessage.textContent = `X's turn`
        } else {
          cellId.textContent = 'O';
          cellId.style.pointerEvents = 'none';
          displayMessage.textContent = `O's next`
        }      
        holder.b[parseFloat(e.currentTarget.id[e.currentTarget.id.length - 1])] =
					cellId.textContent;
        holder.turn += 1;
    }
})



function checkForWinner () {
    if (holder.b[0] === holder.b[1] && holder.b[0] === holder.b[2] && typeof holder.b[0] === 'string') {return true};
    if (holder.b[3] === holder.b[4] && holder.b[3] === holder.b[5] && typeof holder.b[3] === 'string') {return true;}
    if (holder.b[6] === holder.b[7] && holder.b[6] === holder.b[8] && typeof holder.b[6] === 'string') {return true;}
    if (holder.b[0] === holder.b[3] && holder.b[0] === holder.b[6] && typeof holder.b[0] === 'string') {return true;}
    if (holder.b[1] === holder.b[4] && holder.b[1] === holder.b[7] && typeof holder.b[1] === 'string') {return true;}
    if (holder.b[2] === holder.b[5] && holder.b[2] === holder.b[8] && typeof holder.b[2] === 'string') {return true;}
	if (holder.b[0] === holder.b[4] && holder.b[0] === holder.b[8] && typeof holder.b[0] === 'string') {return true;}
	if (holder.b[2] === holder.b[4] && holder.b[2] === holder.b[6] && typeof holder.b[2] === 'string') {return true;}
    if (holder.turn === 10) return displayMessage.textContent = `It's a tie!`;
}

newGameBtn.addEventListener('click', () => {
	holder.b = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    cellIds.forEach((cell) => {
        cell.textContent = '';
        cell.style.pointerEvents = "auto";
        holder.turn = 1;
        displayMessage.textContent = '';
    });
});