const startBtn = document.querySelector('.start')
const resetBtn = document.querySelector('.reset')
const stopBtn = document.querySelector('.stop')


const seconds = document.querySelector('.seconds');
const milSec = document.querySelector('.milSec');

let milSecCount = 0;
let secCount = 0;
let interval;

startBtn.addEventListener('click', function(){
    interval = setInterval(startTimer, 10);
})


stopBtn.addEventListener('click', function(){
    clearInterval(interval);
})

resetBtn.addEventListener('click', function(){
    clearInterval(interval);
    milSecCount = 0
    secCount = 0;
    seconds.innerHTML = `0${secCount}`;
    milSec.innerHTML = `${milSecCount}`
})


let randomColors = ["red", "yellow", "blue", "green", "black", "purple", "orange"]
let random = Math.floor(Math.random() * randomColors.length)

function startTimer(){
    milSecCount++;
    milSec.innerHTML = `${milSecCount}`
    if(milSecCount > 99){
        secCount++;
        seconds.innerHTML = `0${secCount}`;
        milSecCount = 0;
        milSec.innerHTML = `${milSecCount}`
    }
    if(secCount > 9){
        seconds.innerHTML = `${secCount}`
    }
}

window.onload = function() {
    document.body.style.backgroundColor = `${randomColors[random]}`
}