$(window).scroll(function(){
    $(".stars").css("opacity", 1 - $(window).scrollTop() / 1900);
});

$('a[href*=#]').click(function(event){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    event.preventDefault();
});
