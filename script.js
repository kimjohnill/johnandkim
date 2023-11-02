window.fadeIn = function(obj) {
    $(obj).fadeIn(1000);
}

$(document).ready(function () {
    $('#box').css('opacity',0).animate({opacity:1}, 1000);
});
