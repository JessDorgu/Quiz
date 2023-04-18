var timer = document.querySelector("timer");

function timeRemaining() {
    var timeLeft = 90;
    var timeInterval = setInterval(function(){
        if(timeLeft>0){
            timer.textContent = timeLeft;
            timeLeft--;
        }else {
            timer.textContent="";
            clearInterval(timeInterval);
        }   
    }, 1000);
}