//alert("hello");
//calling windows. load to call the function()



// Generate 2 random number from random method for player 1 and player 2;




// create a image array for the dices on the random number;

//var diceList  = ['dice1.png','dice2.png','dice3.png','dice4.png','dice5.png','dice6.png']
playerSwitch();



function playerSwitch(){

    var player1 = Math.random();
    player1 = Math.floor(player1 * 6) + 1;
    console.log( player1);

    var player2 = Math.random();
    player2 = Math.floor(player2 * 6) +1;
    console.log(player2);

    switch(player1){
        case 1: player1 === 1;
            document.querySelector(".img1").setAttribute("src","images/dice1.png");
            break;
    
        case 2: player1 === 2;
            document.querySelector(".img1").setAttribute("src","images/dice2.png");
            break;
        case 3: player1 === 3;
            document.querySelector(".img1").setAttribute("src","images/dice3.png");
            break;
        case 4: player1 === 4;
            document.querySelector(".img1").setAttribute("src","images/dice4.png");
            break;
        case 5: player1 === 5;
            document.querySelector(".img1").setAttribute("src","images/dice5.png");
            break;
        case 6: player1 === 6;
            document.querySelector(".img1").setAttribute("src","images/dice6.png");
            break;
}

    switch(player2){
        case 1: player2 === 1;
            document.querySelector(".img2").setAttribute("src","images/dice1.png");
            break;

        case 2: player2 === 2;
            document.querySelector(".img2").setAttribute("src","images/dice2.png");
            break;
        case 3: player2 === 3;
            document.querySelector(".img2").setAttribute("src","images/dice3.png");
            break;
        case 4: player2 === 4;
            document.querySelector(".img2").setAttribute("src","images/dice4.png");
            break;
        case 5: player2 === 5;
            document.querySelector(".img2").setAttribute("src","images/dice5.png");
            break;
        case 6: player2 === 6;
            document.querySelector(".img2").setAttribute("src","images/dice6.png");
            break;
    }

if(player1 > player2){
    document.querySelector(".container h1").textContent = "Player 1 wins";   
}
if(player2 > player1){
    document.querySelector(".container h1").textContent = "Player 2 wins";   
}
if(player1  === player2){
    document.querySelector(".container h1").textContent = "Refresh Me";  
}


}
