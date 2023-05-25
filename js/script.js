
const button = document.querySelector('button');
const myMain = document.querySelector('main');
let arrayBomb = [];



button.addEventListener('click',function(){
    let gameEnd = false;
    let gameCount = 0;
    let bombCount = 0;
    arrayBomb = [];
    myMain.replaceChildren();
    const tableGame = document.createElement('div');
    tableGame.classList.add('table-game');
    myMain.append(tableGame);
    
    createBomb(16);
       
    console.log(arrayBomb);
        

    for (let i = 1; i < 101; i++) {
        const box = createBoxes(i,tableGame);
        box.addEventListener('click',function(){

            if(bombCount == 16){
                console.log('Hai pestato tutte e 16 le bombe');
                console.log('hai fatto ' + gameCount + ' passi');
                gameEnd = true;
            }else if(gameCount >= 84){
                console.log('Hai completato il gioco...hai barato,vero?');
                gameEnd = true;
            }else if(!gameEnd){
                if(arrayBomb.includes(i)){
                    box.classList.add('box-explosion');
                    bombCount++;
                    console.log(bombCount)
                }else{
                    box.classList.add('box-toogled');
                    gameCount++
                }
            }
            
        });
    }    

    
});

function createBomb(num){
    for(let i = 0; i < num; i++){
        let bomb = random(1,100);
        let bombTrust = arrayBomb.includes(bomb);
        if(!bombTrust){
        arrayBomb.push(bomb);
        }
        else{
            i--;
        }
    }
}

function createBoxes(id,container){

    const div = document.createElement('div');
    div.classList.add('box','d-flex','justify-content-center','align-items-center');
    div.append(id);
    container.append(div);
    return div;

}

function random(min,max){
    return parseInt(Math.random() * max) + min;
}