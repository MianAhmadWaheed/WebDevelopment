$(document).ready(function () {
    function updateClock() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        var period = hours >= 12 ? 'PM' : 'AM';


        hours = hours % 12;
        hours = hours ? hours : 12;


        hours = (hours < 10) ? '0' + hours : hours;
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;


        $('#hours').text(hours);
        $('#minutes').text(minutes);
        $('#seconds').text(seconds);
        $('#period').text(period);
    }

    setInterval(updateClock, 1000);
});