var timerEl = document.getElementById("countdown");

function countdown() {
    var timeLeft = 90;
    var timeInterval = setInterval(function(){
        if(timeLeft>1){
            timerEl.textContent = 'Timer: ' + timeLeft;
            timeLeft--;
        }else {
            timerEl.textContent='';
            clearInterval(timeInterval);
        }   
    }, 1000);
}

countdown();