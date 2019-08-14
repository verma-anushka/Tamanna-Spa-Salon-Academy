
$(document).ready(function()
{
	"use strict"; 

	var header = $('.header');
	var ctrl = new ScrollMagic.Controller();

	initScrollDown();
	initScrollUp();
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

	// SET HEADER
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

	// INIT SCROLL DOWN
	function initScrollDown()
	{
		if($('.scroll_to').length)
		{
			var links = $('.scroll_to');
	    	links.each(function()
	    	{
	    		var ele = $(this);
	    		var target = ele.data('scroll-to');
	    		ele.on('click', function(e)
	    		{
	    			e.preventDefault();
	    			$(window).scrollTo(target, 1500, {offset: -75, easing: 'easeInOutQuart'});
	    		});
	    	});
		}	
	}

	// INIT SCROLL UP	
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

	// INIT PARALLAX
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