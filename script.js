// for that, we have created an array of objects, 
// in which each object has a question and corresponding options and 
// the information of the correct answer. 
// With this array of objects, we have the JSON format so it helps us to deal 
// with the API and to deal with the real data which is of JSON type most of the time.

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


