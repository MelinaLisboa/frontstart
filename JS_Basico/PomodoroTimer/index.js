const INITIAL_TIME_IN_SECONDS = 25 * 60; //1450 segundos
let timeInSeconds = INITIAL_TIME_IN_SECONDS;
let timer = null;

const PLAY_BUTTON = document.getElementById('play');
const PAUSE_BUTTON = document.getElementById('pause');
const RESET_BUTTON = document.getElementById('reset');

PLAY_BUTTON.addEventListener('click', starCounter);
PAUSE_BUTTON.addEventListener('click', pauseCounter);
RESET_BUTTON.addEventListener('click', resetCounter);

updateDom();

function starCounter() {
    timer = setInterval( () => {
        timeInSeconds--;
        updateDom();
    }, 1000);

    PLAY_BUTTON.disabled = true;
}

function pauseCounter() {
    clearInterval(timer);
    PLAY_BUTTON.disabled = false;
}

function resetCounter(){
    clearInterval(timer);
    timeInSeconds = INITIAL_TIME_IN_SECONDS;
    updateDom();
    PLAY_BUTTON.disabled = false;
}

function updateDom(){
    const minutes = Math.floor(timeInSeconds / 60);
    document.getElementById('min').innerHTML = String(minutes).padStart(2, 0);

    const seconds = timeInSeconds % 60;
    document.getElementById('sec').innerHTML = String(seconds).padStart(2, 0);
}