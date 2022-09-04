// var for minutes
const startingMinutes = 1;
// let for seconds because want to change 
let time = startingMinutes * 60;

const countdownEL = document.getElementById('countdown');

t = setInterval(updateCountdown, 1000);



function updateCountdown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEL.innerHTML = `${minutes}:${seconds}`;

    time--;

    if(time === -1){
        clearInterval(t);
    }
    
}


