const   daysEL = document.getElementById("days"),
        hoursEL = document.getElementById("hours"),
        minsEl = document.getElementById("mins"),
        secondsEl = document.getElementById("seconds");

const newYear = "1 Jan 2024" // This date is able to be reset to any other in the future

function countdown() {
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds/ 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const minutes = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor (totalSeconds) % 60
     
    daysEL.innerHTML = formatTime(days)
    hoursEL.innerHTML = formatTime(hours)
    minsEl.innerHTML = formatTime(minutes)
    secondsEl.innerHTML = formatTime(seconds)
}

function formatTime(time){
    return time< 10 ? (`0${time}`) : time;
}

//initial call
countdown();

setInterval(countdown, 1000);
