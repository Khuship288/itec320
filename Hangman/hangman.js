let POSSIBLE_WORDS= ["obdurate", "verisimilitude", "defenestrate", 
    "obsequious","dissonant","toady","imdempotent"]

let guesses ="";
let word="";
let MaxGuesses = 6;
let guessCount = MaxGuesses;
let gameOver= false;
   

function newgame(){
    guesses="";
    guessCount= MaxGuesses;
    gameOver= false;
    document.getElementById("guess").value ="";
   
     let randomIndex= parseInt(Math.random()* POSSIBLE_WORDS.length);
     word= POSSIBLE_WORDS[randomIndex];
     updateScreen();
     

}

function guess(){
    let input= document.getElementById("guess");
    let letter= input.value;
    if (word ==""){
        return;
    }
    if (gameOver== true){
        return;
    }
    if (letter == ""){
        return;
    }
    if (guesses.indexOf(letter) >=0) {
        input.value ="";
        return;
    }
    if(word.indexOf(letter) < 0){
        guessCount--;
    }
    guesses+= letter;
    input.value ="";
    updateScreen();

    let won= true;
    for (let i=0; i<word.length; i++){
        if (guesses.indexOf(word.charAt(i)) <0){
            won = false;
        }
    }
    if (won){
        gameOver = true;
        document.getElementById("guesses").textContent= "You Won! The word was " + word;
    }
    else if(guessCount==0){
        gameOver=true;
        document.getElementById("guesses").textContent= "You Lost! The word was " + word;
    }

    
}

function updateScreen(){
    let clueString="";
     for (let i=0; i<word.length; i++){
        let letter= word.charAt(i);
        if(guesses.indexOf(letter)>=0){
            clueString+=letter+" ";
        }
        else{
        clueString+="_ ";
        }
     }

     let clue=document.getElementById("clue");
     clue.textContent= clueString;
     let guessArea = document.getElementById("guesses");
     guessArea.textContent= "Guessed letters: "+guesses;
     let image = document.getElementById("hangmangif");
     image.src= "images/hangman" + guessCount + ".gif";
    
}