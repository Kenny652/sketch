document.addEventListener('DOMContentLoaded', function() {
    createBoard(40)
})

function createBoard(size) {
    let board = document.querySelector('.divcontainer');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows    = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement('div');
        div.style.backgroundColor = 'yellow'
        board.insertAdjacentElement('beforeend', div);        
    }
}

