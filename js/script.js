


const grid = document.getElementById(`grid`)

const buttonPlay = document.getElementById(`button-header`);

const rows = 10;
const cells = 10;
const rowCells = rows * cells ;


 buttonPlay.addEventListener(`click`, function(event){
    for(let i=1;i <= rowCells ;i++){
        
        // creo l elemento div
    const cell = document.createElement(`div`);
    cell.className = `cell`;
    cell.innerText = i;
    
    // appendo l elemento all interno del suo contenitore
    grid.append(cell);
    }
}
 )

//  devo creare un ciclo for che mi crei l elemento numero e me lo appenda consecutivamente dentro ogni cella