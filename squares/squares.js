let squareArea = document.querySelector("#squarearea");
let squareCount= parseInt(Math.random()*21) +30; //30-50

for(let i =0; i< squareCount; i++){
    let square= document.createElement("div");
    square.className="square";
    square.style.backgroundColor=getRandomcolor();

    square.style.top= parseInt(Math.random()*(300-50))+"px";
    square.style.left= parseInt(Math.random()*(700-50))+"px";
    squareArea.append(square);

}

function getRandomcolor(){
    let possibleLetters= "0123456789ABCDEF";
    let color= "#";
    // let color="#ff0000";
    //do something to make a random value
    for(let i=0; i<6; i++){
        let position = parseInt(Math.random()*possibleLetters.length)
        color+=possibleLetters.charAt(position);
    
    }
    return color;
}