$(function() {
    resizeChangeColor();
    $(window).resize(function() {
        resizeChangeColor();
    });
    $(window).scroll(function() {
        scrollChangeColor();
    });
});

function scrollChangeColor() {
    if ($(window).scrollTop() >= 200) {
        navbarLight();
    } else {
        if ($(window).width() >= 987) {
            navbarTransperent();
        }
    }
}

function resizeChangeColor() {
    if ($(window).width() >= 987) {
        if ($(window).scrollTop() < 200) {
            navbarTransperent();
        }
        else{
            navbarLight(); 
        }
    } else {
        navbarLight();
    }
}

function navbarTransperent() {
    $(".navbar").removeClass("bg-light");
    $(".navbar").removeClass("navbar-light");
    $(".navbar").removeClass("shadow");
    $(".navbar").addClass("bg-transperent");
    $(".navbar").addClass("navbar-dark");
}

function navbarLight() {
    $(".navbar").removeClass("bg-transperent");
    $(".navbar").removeClass("navbar-dark");
    $(".navbar").addClass("bg-light");
    $(".navbar").addClass("navbar-light");
    $(".navbar").addClass("shadow");
}