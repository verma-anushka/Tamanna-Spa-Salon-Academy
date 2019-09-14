
$(document).ready(function()
{
	"use strict";

	var header = $('.header');

	initScrollDown();
	initScrollUp();
    initDiscount();	
	initServicesSlider();
	initParallax();
	setHeader();

    $(window).on('resize', function()
    {
		setHeader();
		setTimeout(function()
		{
			$(window).trigger('resize.px.parallax');
		}, 375);
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	// Set Header
	function setHeader()
	{
		if($(window).scrollTop() > 91)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	// Init Scroll Down
	function initScrollDown()
	{
		$(".scroll_down").click(function() {
		     $('html, body').animate({
		         scrollTop: $(".services").offset().top
		     }, 1500);
		 });
	}

	// Init Scroll Up
	function initScrollUp()
	{
		$( window ).scroll( function() {
			if ( $( this ).scrollTop() > 800 ) {
				$( '.back-to-top' ).addClass( 'show-back-to-top' );
			} else {
				$( '.back-to-top' ).removeClass( 'show-back-to-top' );
			}
		});
		$( '.back-to-top' ).click( function() {
			$( 'html, body' ).animate( { scrollTop : 0 }, 800 );
			return false;
		});
    }

    // Init Discount
	function initDiscount()
	{
        $('.set-bg').each(function() {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
        $(".hero-slider").owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            mouseDrag: false,
            animateOut: 'fadeOutLeft',
            animateIn: 'fadeInRight',
            items: 1,
        });
        var dot = $('.hero-slider .owl-dot');
        dot.each(function() {
            var index = $(this).index() + 1;
            if(index < 10){
                $(this).html('').append('');
            }else{
                $(this).html(index);
            }
        });
    }
		
	// Init Services Slider
	function initServicesSlider()
	{
		if($('.services_slider').length)
		{
			var servicesSlider = $('.services_slider');
			servicesSlider.owlCarousel(
			{
				items:3,
				loop:true,
				autoplay:true,
				dots:false,
				nav:false,
				smartSpeed:1200,
				margin:35,
				responsive:
				{
					0:{items:1},
					992:{items:2},
					1441:{items:3}
				}
			});
		}
	}
	
	// Init Parallax
	function initParallax()
	{
		if($('.parallax_background').length)
		{
			$('.parallax_background').parallax(
			{
				speed:0.8
			});
		}
	}

});









