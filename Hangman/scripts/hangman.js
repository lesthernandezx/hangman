var phrases = [
    "THE HTML ROCKS",
    "WHAT'S UP DOG"
];

var phrase="";
var splitPhrase = [];
var failCount=0;

function getRandomPhrase(){
    index = Math.round( Math.random(phrases.length));  
    phrase = phrases[index];  
}

function buildBoxes(){
    splitPhrase = phrase.split('');
    var secPhrase =  document.getElementById('secPhrase');
    var i=0;
    splitPhrase.forEach(element => {
        var box = document.createElement("div");
        box.setAttribute("id",i);
        if (element==" "){
            box.setAttribute("class","box ");
            box.innerText = " ";
        } else{
            box.setAttribute("class","box unknown");
            box.innerText = "?";
            
        }
        secPhrase.appendChild(box);
        i++;
    });
}


function getGuess(){    
    var txtGuess = document.getElementById('txtGuess');
    var guess = txtGuess.value.toUpperCase();
    txtGuess.value="";
    txtGuess.focus();
    /*TODO regular expression validation */
    return guess;
}

function tryGuess(){
    var guess = getGuess();
    lookForMatches(guess);
}

function lookForMatches(guess){
    var i=0;
    isValidGuess=false;
    splitPhrase.forEach(element => {
        if (element == guess){
            var box = document.getElementById(i);
            box.innerText = guess;
            box.setAttribute("class","box found");
            isValidGuess = true;
        }        
        i++;
    });

    var secFails = document.getElementById('secFails');
    if (!isValidGuess ){
        failCount++;        
        var spnFails = document.createElement('span');
        spnFails.setAttribute
        spnFails.innerText = 'X ';
        secFails.appendChild(spnFails);
    }
    if (failCount==5){
        alert('Game Over');
        /*txtGuess.setAttribute('disabled','');
        var hResult = document.createElement('h2');
        hResult.innerHTML = 'Game Over';*/
    }
}

window.onload = function(){
    getRandomPhrase();
    
    buildBoxes();
};