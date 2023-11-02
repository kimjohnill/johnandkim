

$('#box').imagesLoaded({
    progress: function (isBroken, $allImages, $loadedImages, $brokenImages) {
        console.log('ok: ' + $loadedImages.length + ', bad: ' + $brokenImages.length);
    },
    done: function ($images) {
        $('#box').animate({'opacity':1}, 300);
    }
});
