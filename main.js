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
        } else {
          cellId.textContent = 'O'
        }      
        gameBoard[parseFloat(e.currentTarget.id[e.currentTarget.id.length - 1])] =
					cellId.textContent;
        turn += 1;
}
})
