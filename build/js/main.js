$(function(){
	/*/////////////////////////
	//60fps scroll paints
	/////////////////////////*/
	var body = $('body');
	var timer;
	$(window).on("scroll", function(){
		if(! body.hasClass('disable-hover')){
			body.addClass('disable-hover');
		}
		timer = setTimeout(function(){
			body.removeClass('disable-hover');
		}, 250);
	}, false);

	/*//////////////////////////////////////
	//	popup windows
	//////////////////////////////////////*/
	function popupwindow(){
       $("a[data-popup]").on('click', function(e) {
            window.open($(this)[0].href);
            e.preventDefault();
        });
    }
    popupwindow();

    /*//////////////////////////////////////
	//	fitvids
	//////////////////////////////////////*/
	$('.about').fitVids();

	if($('html').hasClass('touch')){
		$('.video').remove();
	}

});
