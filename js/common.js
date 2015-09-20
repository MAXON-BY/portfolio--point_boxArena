$(document).ready(function() {


    $("#owl-demo").owlCarousel({

        singleItem : true,
        items : 1,
        itemsDesktop: false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,

        //Lazy load
        lazyLoad : true,
        lazyFollow : true,
        lazyEffect : "fade"
    });

    $("#owl-news").owlCarousel({
        navigationText : false,
        navigation : true, // Show next and prev buttons
        pagination: false,
        singleItem : true,
        items : 1,
        itemsDesktop: false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false
    });

    $("#owl-photo").owlCarousel({
        pagination: true,
        singleItem : true,
        items : 1,
        itemsDesktop: false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,

        //Lazy load
        lazyLoad : true,
        lazyFollow : true,
        lazyEffect : "fade"
    });

    //pop-up
    //$('.popup').magnificPopup({type:'image'});

    //fancy-box
    $(document).ready(function() {
        $(".fancybox").fancybox({
            openEffect	: 'none',
            closeEffect	: 'none'
        });
    });

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

