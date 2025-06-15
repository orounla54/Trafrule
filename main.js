$(function(){
    $(window).on("scroll",function(){
        if($(window).scrollTop()> 10) {
            $("#header-main").addClass('background-colored');
        }
    });

    $(".navbar-toggler").on("click", function(){
        $(".header").addClass("background-colored");
    });
})