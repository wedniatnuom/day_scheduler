var dateEl = document.getElementById("currentTime");
var span = document.getElementById('span');
var tNine = document.getElementById('t0900');
var tTen = document.getElementById('t1000');
var tEleven = document.getElementById('t1100');
var tTwelve = document.getElementById('t1200');
var tOne = document.getElementById('t1300');
var tTwo = document.getElementById('t1400');
var tThree = document.getElementById('t1500');
var tFour = document.getElementById('t1600');
var tFive = document.getElementById('t1700');

var tenText = document.getElementById('10text').value;
var eleventText = document.getElementById('11text').value;
var twelveText = document.getElementById('12text').value;
var oneText = document.getElementById('13text').value;
var twoText = document.getElementById('14text').value;
var threeText = document.getElementById('15text').value;
var fourText = document.getElementById('16text').value;
var fiveText = document.getElementById('17text').value;

dateEl.textContent = moment().format('MMMM Do YYYY');

function time() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    if (h > 12) {
        h = h - 12;
    }
    span.textContent =
        ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}
setInterval(time, 1000);

var now = new Date();
var hour = now.getHours();
console.log(hour);

function backgroundColor() {
    if (hour > 9) {
        tNine.style.backgroundColor = "tomato"; 
    }
    if (hour > 10) {
        tNine.style.backgroundColor = "tomato";
        tTen.style.backgroundColor = "tomato"; 
    }
    if (hour > 11) {
        tNine.style.backgroundColor = "tomato";
        tTen.style.backgroundColor = "tomato";
        tEleven.style.backgroundColor = "tomato";
    }
    if (hour > 12) {
        tNine.style.backgroundColor = "tomato";
        tTen.style.backgroundColor = "tomato";
        tEleven.style.backgroundColor = "tomato";
        tTwelve.style.backgroundColor = "tomato"; 
    }
    if (hour > 13) {
        tNine.style.backgroundColor = "tomato";
        tTen.style.backgroundColor = "tomato";
        tEleven.style.backgroundColor = "tomato";
        tTwelve.style.backgroundColor = "tomato";
        tOne.style.backgroundColor = "tomato"; 
    }
    if (hour > 14) {
        tNine.style.backgroundColor = "tomato";
        tTen.style.backgroundColor = "tomato";
        tEleven.style.backgroundColor = "tomato";
        tTwelve.style.backgroundColor = "tomato";
        tOne.style.backgroundColor = "tomato";
        tTwo.style.backgroundColor = "tomato"; 
    }
    if (hour > 15) {
        tNine.style.backgroundColor = "tomato";
        tTen.style.backgroundColor = "tomato";
        tEleven.style.backgroundColor = "tomato";
        tTwelve.style.backgroundColor = "tomato";
        tOne.style.backgroundColor = "tomato";
        tTwo.style.backgroundColor = "tomato";
        tThree.style.backgroundColor = "tomato"; 
    }
    if (hour > 16) {
        tNine.style.backgroundColor = "tomato";
        tTen.style.backgroundColor = "tomato";
        tEleven.style.backgroundColor = "tomato";
        tTwelve.style.backgroundColor = "tomato";
        tOne.style.backgroundColor = "tomato";
        tTwo.style.backgroundColor = "tomato";
        tThree.style.backgroundColor = "tomato";
        tFour.style.backgroundColor = "tomato"; 
    }
    if (hour > 17) {
        tNine.style.backgroundColor = "tomato";
        tTen.style.backgroundColor = "tomato";
        tEleven.style.backgroundColor = "tomato";
        tTwelve.style.backgroundColor = "tomato";
        tOne.style.backgroundColor = "tomato";
        tTwo.style.backgroundColor = "tomato";
        tThree.style.backgroundColor = "tomato";
        tFour.style.backgroundColor = "tomato";
        tFive.style.backgroundColor = "tomato"; 
    }
}

function currentBackgroundColor() {
    if (hour == 9) {
        tNine.style.backgroundColor = "green";
    }
    if (hour == 10) {
        tTen.style.backgroundColor = "green";
    }
    if (hour == 11) {
        tEleven.style.backgroundColor = "green";
    }
    if (hour == 12) {
        tTwelve.style.backgroundColor = "green";
    }
    if (hour == 13) {
        tOne.style.backgroundColor = "green";
    }
    if (hour == 14) {
        tTwo.style.backgroundColor = "green";
    }
    if (hour == 15) {
        tThree.style.backgroundColor = "green";
    }
    if (hour == 16) {
        tFour.style.backgroundColor = "green";
    }
    if (hour == 17) {
        tFive.style.backgroundColor = "green";
    }
}

currentBackgroundColor();
backgroundColor();

document.getElementById("9btn").addEventListener("click", saveEvent);
function saveEvent() {
    var nineText = document.getElementById('9text').value;
    localStorage.setItem("nineEvent", nineText);
}

document.getElementById("9text").innerHTML = localStorage.getItem("nineEvent");