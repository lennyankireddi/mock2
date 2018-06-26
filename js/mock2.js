
$(document).ready(function() {
    $(".ticker-list").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });
});

$(".banner-toggle").click(function() {
    if ($(this).text() == "Show ticker option") {
        $(".ticker").show();
    }
    else {
        $(".bunch-graphic").show();
    }
    $(this).parent().hide();
});