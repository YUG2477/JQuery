$(document).ready(function () {


    var stopCounter=0;
    var hours, minutes, seconds, cseconds, button_state;
    // var userData = Number.parseInt($(".entry").val())

    // hours = Math.floor(userData / (60 * 60));
    // minutes = Math.floor(((userData) - (hours * 3600)) / 60);
    // seconds = Math.floor((userData) - ((hours * 3600) + (minutes * 60)));
    // cseconds = 99;

    // if (userData>0){

    
    $(".start").click(function () {


        button_state = $(".start").data("state")
console.log(button_state);


        if (button_state == "start") {
            

            var userData = Number.parseInt($(".entry").val())
            if (userData > 0) {
                hours = Math.floor(userData / (60 * 60));
                minutes = Math.floor(((userData) - (hours * 3600)) / 60);
                seconds = Math.floor((userData) - ((hours * 3600) + (minutes * 60)));
                cseconds = 99;
               
            }
            else {
                alert("input data");
                hours=00;
                minutes=00;
                seconds=00;
                cseconds=00;
                $(".hours-digit").html("00");
                $(".minutes-digit").html("00");
                $(".seconds-digit").html("00");
                $(".c-seconds-digit").html(cseconds);
            }
        }else if (button_state=="restart"){
   

            var userData = Number.parseInt($(".entry").val())

                hours = Math.floor(userData / (60 * 60));
                minutes = Math.floor(((userData) - (hours * 3600)) / 60);
                seconds = Math.floor((userData) - ((hours * 3600) + (minutes * 60)));
                cseconds = 99;
                   $("#demo").html("ENTER TIME & HIT START...!");
            $(".footer").css("border-color", "#bebaba");
        $("#demo").css("color", "#000000");
        $(".extra").empty();
        }
       

       
        

        let myInterval = setInterval(run, 10);


        $('.reset').click(function () {
            $(".hours-digit").html("00");
            $(".minutes-digit").html("00");
            $(".seconds-digit").html("00");
            $(".c-seconds-digit").html("00");
            hours=00;
            minutes=00;
            seconds=00;
            cseconds=00;
            var nameInput = $(".entry");
            nameInput.val("");
            $("#demo").html("ENTER TIME & HIT START...!");
            $('.start').text("START")
            $(".footer").css("border-color", "rgb(241, 74, 74)");
            $("#demo").css("color", "rgb(241, 74, 74)");
            $(".footer").css("border-color", "#bebaba");
            $("#demo").css("color", "#000000");
            $(".extra").empty();
            clearInterval(myInterval);
        });

        $('.pause').click(function () {
            $(".start").data("state", "resume")
            document.getElementById("demo").innerHTML = "PAUSED AT " + hours + "HH,  "
                + minutes + "  MM, " + seconds + "  SS. ";
            $(".footer").css("border-color", "rgb(107, 114, 221)");
            $("#demo").css("color", "rgb(107, 114, 221)");
            $('.start').text("RESUME")
            clearInterval(myInterval);
            $(".extra").append(`<h4>PAUSED AT ${hours} HH , 
            ${minutes}  MM ,   ${seconds}  SS .</h4>`);
            console.log("ttttt");
            $(".footer").css("border-color", "rgb(107, 114, 221)");
            $("#demo").css("color", "rgb(107, 114, 221)");

        });

        $('.stop').click(function () {
            $(".start").data("state", "restart")
            
            document.getElementById("demo").innerHTML = "STOP AT " + hours + "HH,  "
                + minutes + "  MM, " + seconds + "  SS. ";

                $(".extra").append(`<h4>STOPPED AT ${hours} HH , 
                ${minutes}  MM ,   ${seconds}  SS .</h4>`);
            $(".footer").css("border-color", "rgb(241, 74, 74)");
            $("#demo").css("color", "rgb(241, 74, 74)");
            $('.start').text("RESUME")
            clearInterval(myInterval);
            $('.start').text("RESTART")
        stopCounter=1

            // $(".extra").empty();

        


        });

     




        function run() {

            console.log(hours, minutes, seconds)

            if (cseconds > 0) {
                cseconds--;
                // console.log(cseconds);
            } if (cseconds <= 0 ) {
                seconds--; 
                cseconds = 99;
                // console.log("cseconds");
            }
            $(".c-seconds-digit").html(cseconds);
            //      seconds--;
            if (seconds <= 0 && minutes == 0 && hours == 0) {
                seconds = 0;
                cseconds = 00;
                // console.log(seconds)
            }
            if (seconds == 0 && minutes == 0 && hours > 0) {
                minutes = 59;
                console.log(1)
            }
            if (seconds == 0 && minutes > 0 && hours > 0) {
                if (minutes > 0 && hours > 0) {
                    minutes--;
                    seconds = 59;
                    console.log(2);
                }

            } else if (minutes == 0 && hours > 0) {
                hours--;
                minutes = 59;
                console.log(3)
            } if (minutes >= 0 && hours >= 0 && seconds < 0) {
                seconds = 59;
                minutes--;
            }
            $(".c-seconds-digit").html(cseconds);

            myTimer(userData, seconds, minutes, hours);



        }


    })

   
    

    function myTimer(userData, seconds, minutes, hours, cseconds) {
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        if (cseconds < "10") { cseconds = "0" + cseconds; }


        $(".hours-digit").html(hours);
        $(".minutes-digit").html(minutes);
        $(".seconds-digit").html(seconds);
        $(".c-seconds-digit").html(cseconds);


    }


})









