$(document).ready(function () {
    var centiseconds = 0;
    var seconds = 0;
    var minutes = 0;
    var hours = 0;
    var stopwatchInterval;

    function updateTime() {
        centiseconds++;
        if (centiseconds == 100) {
            centiseconds = 0;
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
                if (minutes == 60) {
                    minutes = 0;
                    hours++;
                }
            }
        }

        $(".hours-digit").html(hours);
        $(".minutes-digit").html(minutes);
        $(".seconds-digit").html(seconds);
        $(".c-seconds-digit").html(centiseconds);
    }

    $(".start").click(function () {
        stopwatchInterval = setInterval(updateTime, 10);     
        console.log(centiseconds);  
    });

    $(".stop").click(function () {
        clearInterval(stopwatchInterval);
        $(".start").html("RESTART");
        centiseconds = 0;
        seconds = 0;
        minutes = 0;
        hours = 0;
       

    });

    $(".pause").click(function () {
        $(".start").html("RESUME");
        $(".footer").append(`<h2>PAUSE AT ${hours} h 
        ${minutes}  m   ${seconds}  s ${centiseconds}  cs</h2>`);
        clearInterval(stopwatchInterval);


        // document.getElementById("demo").innerHTML = "PAUSE AT " + hours + "h "
        // + minutes + "m " + seconds + "s " +centiseconds + "cs";
    });

    $(".reset").click(function () {
        clearInterval(stopwatchInterval);
        centiseconds = 0;
        seconds = 0;
        minutes = 0;
        hours = 0;
        $(".hours-digit").html("00");
        $(".minutes-digit").html("00");
        $(".seconds-digit").html("00");
        $(".c-seconds-digit").html("00");
        $('.footer h2').empty();
        $("#demo").html("ENTER TIME & HIT START...!");

    });
});