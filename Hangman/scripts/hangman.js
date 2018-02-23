var phrases = [
    "THE CAR",
    "SECOND PHRASE TEST"
];

var phrase="";
var isValidGuess = false;
var splitPhrase = [];
var splitPhraseNoSpace = [];
var failsCount=0;
var matchCount=0;

function getRandomPhrase(){
    index = Math.round( Math.random(phrases.length - 1));  
    phrase = phrases[index];  
    splitPhrase = phrase.split('');   
    splitPhraseNoSpace = phrase.replace(/\s/g, '').split('');
}

function buildBoxes(){     
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
    if (guess!= ''){
        lookForMatches(guess);
        printFailsCount();
    }           
    checkWin();
    checkLose(); 
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
            matchCount++;
        }        
        i++;
    });
}

function printFailsCount(){
    if (!isValidGuess){
        failsCount++;
        var secFails = document.getElementById('secFails');                
        var spnFails = document.createElement('span');
        spnFails.setAttribute
        spnFails.innerText = 'X ';
        secFails.appendChild(spnFails);
        if (failsCount == 1) {secFails.style.display="inline";}  
    }      
}

function checkLose(){
    if(failsCount==5){
        txtGuess.setAttribute('disabled','');
        var dlogGameOver = document.getElementById('dlogGameOver'); 
        dlogGameOver.showModal();        
    }
}

function checkWin(){
    if(matchCount==splitPhraseNoSpace.length){
        var dlogWin = document.getElementById('dlogWin'); 
        dlogWin.showModal();           
    }
}

function startNewGame(){
    resetCounters();
    getRandomPhrase();    
    buildBoxes();
}

window.onload = function(){
    startNewGame();
};

function resetCounters(){
    matchCount=0;
    failsCount=0;
}
