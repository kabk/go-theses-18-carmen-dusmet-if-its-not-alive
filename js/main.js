
jQuery(function ($) {
    $(".visual").on('click', function (e) {
        if (!$(".image-overlay").length) {
            $('body').append(".image-overlay")
        }
    }).keyup(function (e) {
        if (e.which == 27) {
            $(".image-overlay").hide();
        }
    }).blur(function (e) {
        $(".image-overlay").hide();
    });
    $('body').click(function (e) {
        if (!$(e.target).is(".visual")) {
            $(".image-overlay").hide();
        }
    })

});


var wHeight = $(window).height();
var headerHeight = $('#header').height();

$('.image-overlay').css('height', wHeight-headerHeight+'px');
