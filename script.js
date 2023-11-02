window.fadeIn = function(obj) {
    $(obj).fadeIn(1000);
}

var $images = $('div img');
var loaded_images_count = 0;

$images.load(function(){
    loaded_images_count++;

    if (loaded_images_count == $images.length) {
        $('#box').show();
    }
});
