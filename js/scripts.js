$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
});
$('#reserveButton').on('click', function() {
    $('#reserveModal').modal('show');
});

$('#loginButton').on('click', function() {
    $('#loginModal').modal('show');
});

/* 

I was using the click method below but after some research found that the best practice is now the '.on' method I am using above. I have included both for you to show that I understand the concept. 

$('#reserveButton').click(function() {
    $('#reserveModal').modal('show');
});

$('#loginButton').click(function() {
    $('#loginModal').modal('show');
});

*/