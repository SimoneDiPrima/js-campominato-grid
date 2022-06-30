


const grid = document.getElementById(`grid`)

const buttonPlay = document.getElementById(`button-header`);

const rows = 10;
const cells = 10;
const rowCells = rows * cells ;


buttonPlay.addEventListener(`click`, function(){
    for(let i=1;i <= rowCells ;i++){
        
            // creo l elemento div
        const cell = document.createElement(`div`);
        cell.className = `cell`;
        
    
        // appendo l elemento all interno del suo contenitore
        grid.appendChild(`div`);
    }
    }
)