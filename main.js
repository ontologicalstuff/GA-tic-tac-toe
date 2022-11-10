// constants 
const cellIds = document.querySelectorAll('div');

cellIds.forEach((e) => {
    e.onclick = (e) => {
        const cellId = document.querySelector(`#${e.currentTarget.id}`);
        cellId.textContent = 'X';
}
})