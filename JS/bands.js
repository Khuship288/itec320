let bandList = [];

function addBand(){ 
    let input = document.getElementById("band");
    let band = input.value;
    bandList.push(band);
    input.value = "";
    updateScreen();
}

function clearList(){
    bandList=[];
    updateScsreen();
}

function reverseList(){
    bandList.reverse();
    updateScsreen();
}

function updateScreen(){
 let output = document.getElementById("list");
 if(bandList.length==0){
     output.textContent = "Please enter an Band name...";
 }
 else{
     output.textContent = "["+ bandList.join('-')+"]";
 }
}
