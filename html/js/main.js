$(function() {
    function popupwindow() {
        $("a[data-popup]").on("click", function(e) {
            window.open($(this)[0].href), e.preventDefault();
        });
    }
    var timer, body = $("body");
    $(window).on("scroll", function() {
        body.hasClass("disable-hover") || body.addClass("disable-hover"), timer = setTimeout(function() {
            body.removeClass("disable-hover");
        }, 250);
    }, !1), popupwindow(), $(".about").fitVids(), $("html").hasClass("touch") && $(".video").remove();
});