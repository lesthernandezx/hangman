
findSavedGame();

function startNewGame(){
    localStorage.setItem('isResumeGame','false');
    window.location.assign('./game.html');
}

/* USING LOCAL STORAGE */
function findSavedGame(){
    if(typeof(Storage) !== "undefined"){
        var usedValidGuesses = localStorage.getItem('usedValidGuesses');
        if (usedValidGuesses !== "undefined"){
            document.getElementById('btnResumeGame').setAttribute('style','display:inline');
        }
    }
}

function resumeGame(){
    localStorage.setItem('isResumeGame','true');
    window.location.assign('./game.html');
}