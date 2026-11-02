function changeText(){
    let inputBox= document.getElementById("input");
    let userInput = inputBox.value;
    let button= document.getElementById("button");
    button.textContent= userInput;
    
}