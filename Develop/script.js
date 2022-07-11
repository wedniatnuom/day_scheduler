var dateEl = document.getElementById("currentTime");
var span = document.getElementById('span');

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

