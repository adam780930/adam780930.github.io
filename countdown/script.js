const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');
const submitBtn = document.getElementById('submitBtn');
const countDownTitle = document.getElementById('countDownTitle');
const newCustomDate = document.getElementById('newCustomDate');

const yearOptions = ["2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"];

for (var i = 0; i < yearOptions.length; i++) {
    var opt = yearOptions[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    document.getElementById("selectYear").appendChild(el);
};

const monthOptions = ["January", "Feburary", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

for (var i = 0; i < monthOptions.length; i++) {
    var opt = monthOptions[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    document.getElementById("selectMonth").appendChild(el);
};

const dayOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11",
    "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23",
    "24", "25", "26", "27", "28", "29", "30", "31"];

for (var i = 0; i < dayOptions.length; i++) {
    var opt = dayOptions[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    document.getElementById("selectDay").appendChild(el);
};

//define the new year date and time
let newYear = new Date().getFullYear() + 1;
let newMonth = 0;
let newDay = 1;

let newYearTime = new Date(newYear, newMonth, newDay);

// update countdown timer
function updateCountdown() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    //add values to DOM
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
    newCustomDate.innerHTML = newYearTime;
}

// show spinner before countdown
setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';
}, 1000);

// run update countdown function every second
setInterval(updateCountdown, 1000);

// function to allow custom time
submitBtn.addEventListener('click', () => {
    countDownTitle.innerHTML = 'Custom Count Down';
    newYear = document.getElementById("selectYear").value;
    newMonth = monthOptions.indexOf(document.getElementById("selectMonth").value);
    newDay = document.getElementById("selectDay").value;
    newYearTime = new Date(newYear, newMonth, newDay);
    newCustomDate.innerHTML = newYearTime;
});

