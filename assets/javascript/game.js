//html to load before javascript
window.onload = function() {

    //array of possible choices for computer to choose from
    var alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
    //variables to hold computer choice and player guesses
    var playerGuess = [];
    var computerChoice = null;

    //varibles to hold numbers of guesses player has left        
    var left = 9;
    
    //varible to hold number of wins and losses
    var win = 0;
    var lose = 0;

    //function to keep track of how many guesses the player has left
    var trackLeft = function() {
        
        document.querySelector(".left").innerHTML = left;
    };
    //funtion for computer to choose a new letter and print it in the console
    var newComputerChoice = function() {
        computerChoice = alpha[Math.floor(Math.random() * alpha.length)];
        console.log (computerChoice);
    };

    //function to show each guess the player has tried
    var eachGuessed = function() {
        document.querySelector(".guessed").innerHTML = playerGuess.join(" | ");
    };

    //fucntion for user to try again after 9 changes
    var tryAgain = function() {
        left = 9;
        playerGuess = [];
        newComputerChoice();
        trackLeft();
        eachGuessed();
    };

    // call functions to execute when page loads (after html)
    newComputerChoice();
    trackLeft();
 
   //player input
    document.onkeyup = function(event) {
        left--;
        
        var playerChoice = String.fromCharCode(event.keyCode);
            playerGuess.push(playerChoice);
            trackLeft();
            eachGuessed();

           //if the player's guess matches the computer's choice, the number of wins increases by 1 and computer chooses another letter
            if (playerChoice === computerChoice) {
                win++;
                document.querySelector(".win").innerHTML = win;
                tryAgain();
            }

            //if the player's guess does not match the computer's choice, the number of losses decreases by 1, computer chooses another letter
            if (left === 0) {
                lose++;
                document.querySelector(".lose").innerHTML = lose;
                tryAgain();
            }
        };
}
    