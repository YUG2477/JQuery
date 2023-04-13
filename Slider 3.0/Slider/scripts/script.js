$(document).ready(function(){

    var slideShow = setInterval(function () {
        nextSlider();
    }, 2000);

    $(".next").click(function () {
        clearInterval(slideShow);
        nextSlider();
    });

    $(".prev").click(function(){
        clearInterval(slideShow);
        prevSlider();
    });

    $("#play").click(function() {
        clearInterval(slideShow);
        slideShow = setInterval(function() {
            nextSlider();
        },2000);
    });

    $("#pause").click(function() {
        clearInterval(slideShow);
    });


    function nextSlider() {
        var currentImg = $(".active");
        var nextImg = currentImg.next();
        var currentDot = $(".active-dot");
        var nextDot = currentDot.next();

        if (nextImg.length) {
            currentImg.removeClass("active");
            nextImg.addClass("active");
            currentDot.removeClass("active-dot");
            nextDot.addClass("active-dot");
        } else {
            currentImg.removeClass("active");
            $(".slides").first().addClass("active");
            currentDot.removeClass("active-dot");
            $(".dots .slide-dot").first().addClass("active-dot");
        }
    }

    function prevSlider() {
        var currentImg = $(".active");
        var prevImg = currentImg.prev();
        var currentDot = $(".dot-active");
        var prevDot = currentDot.prev();
    
        if(prevImg.length) {
            currentImg.removeClass("active");
            prevImg.addClass("active");
            currentDot.removeClass("active-dot");
            prevDot.addClass("active-dot");
        } else {
            currentImg.removeClass("active");
            $(".slides").last().addClass("active");
            currentDot.removeClass("active-dot");
            $(".dots .slide-dot").last().addClass("active-dot");
        }
    }
});