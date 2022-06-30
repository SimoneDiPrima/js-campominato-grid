


const grid = document.getElementById(`grid`)
const buttonPlay = document.getElementById(`button-header`);
let buttonRestart = document.querySelector(`button-restart`);

const rows = 10;
const cells = 10;
const rowCells = rows * cells ;

    buttonPlay.addEventListener(`click`, function(){
        for(let i=1;i <= rowCells ;i++){ 
            // creo l elemento div
        const cell = document.createElement(`div`);
        cell.className = `cell`;
        cell.addEventListener(`click`,function(){
            this.classList.toggle(`clicked`);
            console.log(i);
        })
        cell.innerText = i;
        grid.append(cell);
        }
            }
            )

       
 // da rifare con la funzione per dividere logica e sistemare comando restart! ciclo do-while per validazione restart?
        
        
    