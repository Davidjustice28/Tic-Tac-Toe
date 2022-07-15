//module created with an iife

const game = (() => {
    const _createBoard = () => {
        const board = document.createElement("div");
        board.classList.add("board");
        const boardSquares = [];
        for(i = 0; i < 9; i++) {
            const square = {
                number:i + 1,
                unit: document.createElement("div")
            }

            let newDiv = square.unit
            newDiv.classList.add("square");
            boardSquares.push(newDiv); 
            newDiv.addEventListener("click", () => {
                newDiv.style.backgroundColor = "green";
                let me = users[1] 
                me.selections.push(newDiv);
                let myArray = me.selections;
                console.log(square.number);
                console.log(myArray);
                let divList = document.getElementsByClassName("square");
                if(myArray.includes(divList[0]) && myArray.includes(divList[1]) && myArray.includes(divList[2]) ) { 
                    alert("Awesome! You are won.");
                }
                else if(myArray.includes(divList[3]) && myArray.includes(divList[4]) && myArray.includes(divList[5]) ) { 
                    alert("Awesome! You are won.");
                }
                else if(myArray.includes(divList[6]) && myArray.includes(divList[7]) && myArray.includes(divList[8]) ) { 
                    alert("Awesome! You are won.");
                }
                else if(myArray.includes(divList[0]) && myArray.includes(divList[3]) && myArray.includes(divList[6]) ) { 
                    alert("Awesome! You are won.");
                }
                else if(myArray.includes(divList[1]) && myArray.includes(divList[4]) && myArray.includes(divList[7]) ) { 
                    alert("Awesome! You are won.");
                }
                else if(myArray.includes(divList[2]) && myArray.includes(divList[5]) && myArray.includes(divList[5]) ) { 
                    alert("Awesome! You are won.");
                }
                else if(myArray.includes(divList[0]) && myArray.includes(divList[4]) && myArray.includes(divList[8]) ) { 
                    alert("Awesome! You are won.");
                }
                else if(myArray.includes(divList[2]) && myArray.includes(divList[4]) && myArray.includes(divList[6]) ) { 
                    alert("Awesome! You are won.");
                }
                //computer picks a random square
                const computer = users[0];
                const compArray = computer.selections; 
                function getRandomNum(min, max) {
                    let number = Math.random() * (max - min) + min;
  		            return Math.floor(number);
		        }
		        let indexNum = getRandomNum(0,8);
		        if(!compArray.includes(boardSquares[indexNum]) || !myArray.includes(boardSquares[indexNum])) {
		          let computerChoice = boardSquares[indexNum]; 
		          computerChoice.style.backgroundColor = "red";
		          compArray.push(computerChoice); 
		          console.log(indexNum);
                } 
		        
		        //Defines ways computer can win
		        if(compArray.includes(divList[0]) && compArray.includes(divList[1]) && compArray.includes(divList[2]) ) { 
                    alert("Sorry, you lose.");
                }
                else if(compArray.includes(divList[3]) && compArray.includes(divList[4]) && compArray.includes(divList[5]) ) { 
                    alert("Sorry, you lose.");
                }
                else if(compArray.includes(divList[6]) && compArray.includes(divList[7]) && compArray.includes(divList[8]) ) { 
                    alert("Sorry, you lose.");
                }
                else if(compArray.includes(divList[0]) && compArray.includes(divList[3]) && compArray.includes(divList[6]) ) { 
                    alert("Sorry, you lose.");
                }
                else if(compArray.includes(divList[1]) && compArray.includes(divList[4]) && compArray.includes(divList[7]) ) { 
                    alert("Sorry, you lose.");
                }
                else if(compArray.includes(divList[2]) && compArray.includes(divList[5]) && compArray.includes(divList[5]) ) { 
                    alert("Sorry, you lose.");
                }
                else if(compArray.includes(divList[0]) && compArray.includes(divList[4]) && compArray.includes(divList[8]) ) { 
                    alert("Sorry, you lose.");
                }
                else if(compArray.includes(divList[2]) && compArray.includes(divList[4]) && compArray.includes(divList[6]) ) { 
                    alert("Sorry, you lose.");
                }
		        
		        
	
	
                
            });
            
        }
        for(i = 0; i < boardSquares.length; i++) {
            board.append(boardSquares[i]);    
        }
        const container = document.getElementById("container");
        container.append(board);
   
    }
    
    const users = [];
    
    const startGame = () => {
        _createBoard();
        let computer = player("Computer");
        users.push(computer);
        console.log(computer);

    } 
    const player = (name) => {
        const sayName =  () => `My name is ${name}.`;
        const myName = name;
        const selections = [];
        
        return {myName, selections, sayName} 
    }
    
    let listText = () => {
                let list = document.getElementById("example");
                let firstP = document.createElement("p");
                firstP.innerText = "Player List: ";
                list.append(firstP);
    } 
                
                
    const createPlayer = () => {
        if(users.length <=1 ){
            const nameInput = document.getElementById("name-input").value;
            let user = player(nameInput);
            users.push(user);
            console.log(user);
            console.log(users);
            document.getElementById("name-input").value = " ";
        
        
            for(i = 0; i <users.length; i++){
                let list = document.getElementById("example");
                let p = document.createElement("p");
                p.innerText = users[i].myName;
                list.append(p);
            } 
        }
        
    } 
    
    return {startGame, createPlayer, listText}
})();

//start the game, create a player, and list player names on webpage

game.startGame();
game.listText();
let myButton = document.getElementById("input-button");
myButton.addEventListener("click", game.createPlayer);




 


