const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    task = document.getElementById('task');

function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        minute = today.getMinutes(),
        seconds = today.getSeconds();

    let amPm = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12 || 12;

    time.innerHTML = `${hour}<span>:</span>${addZero(minute)}<span>:</span>${addZero(seconds)}<span> </span>${amPm}`;

    setTimeout(showTime, 1000);
}
function addZero(min) {
    return(parseInt(min, 10) < 10 ? '0' : '') + min;
}

function setBackground() {
    let today = new Date();
    if (today.getHours() > 5 && today.getHours() <= 11) {
        // morning
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        greeting.textContent = "Good Morning";
    } else if (today.getHours() <= 17){
        // afternoon
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        greeting.textContent = "Good Afternoon";
    } else {
        // evening
        document.body.style.backgroundImage = "url('../img/evening.jpg')";
        greeting.textContent = "Good Evening";
    }
}
showTime();
setBackground();