$(document).ready(function(){
    if ($("navbar-toggler").css('display') !== 'none') {
        $(".navbar-toggler").click(function(){
                $('.navbar-collapse').addClass('color');
        });
    }
});

// if ($("navbar-collapse.show").length == 0 ) {
//     alert('ooo')
//     $('.navbar-collapse').removeClass('color');
// }