


const grid = document.getElementById(`grid`)
const buttonPlay = document.getElementById(`button-header`);
const numberCounter = document.getElementById(`number-counter`)
let buttonRestart = document.querySelector(`button-restart`);

const rows = 10;
const cells = 10;
const rowCells = rows * cells ;

let userResult = 0;


let randomNum =[ ];


function randomNumber(min,max,blacklist){
    let numRan;
    for(let j=1;j<=16;j++){
        do{

            numRan = Math.floor((Math.random() * 100) + 1);
            console.log(numRan);
        }
        while(blacklist.includes(numRan)){
            randomNum.push(numRan);
        }
    }
    return numRan;
}


    buttonPlay.addEventListener(`click`, function(){
        const bombNumber = randomNumber(1,100,randomNum);
        console.log(bombNumber)
        console.log(randomNum);

        grid.innerHTML =``;
        for(let i=1;i <= rowCells ;i++){ 
            // creo l elemento div
        const cell = document.createElement(`div`);
        cell.className = `cell`;
        
        cell.addEventListener(`click`,function(){
            this.classList.add(`clicked`);
            if(cell.value = randomNum[i])
             
            if(cell.classList.contains(`clicked`)){
                userResult ++;
                console.log(userResult);
                numberCounter.innerHTML = `PUNTEGGIO GIOCATORE: ${userResult}`;
            }
           
        })
        cell.innerText = i;
        grid.append(cell);

        }
            }
            )

            

       
 // da rifare con la funzione per dividere logica e sistemare comando restart! ciclo do-while per validazione restart?
        
        
    