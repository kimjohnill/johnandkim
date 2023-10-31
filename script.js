window.fadeIn = function(obj) {
    $(obj).fadeIn(1000);
}



/* home slide show */

var $slides = $('.box');
var slide_pos = 0;
var slide_len = $('.box').length;

$slides.filter(':gt(0)').hide();

$slides.eq(1).find('img').load(function(){ //wait for second image to load THEN start slideshow
    slide_int = setInterval(function() {
        $('#next').click();
    }, 8000);
});


$('#next').click(function() {
    $slides.eq(slide_pos % slide_len).fadeOut(500);
    $slides.eq(++slide_pos % slide_len).fadeIn(500);
    
    //clearInterval(slide_int);
});

$('#prev').click(function() {
    $slides.eq(slide_pos % slide_len).fadeOut(500);
    $slides.eq(--slide_pos % slide_len).fadeIn(500);
    
    //clearInterval(slide_int);
});
