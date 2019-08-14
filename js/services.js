
$(document).ready(function()
{
	"use strict";

	var header = $('.header');

	initScrollDown();
	initScrollUp();
	initTabs1();
	initTabs2();
	initTabs3();
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
		         scrollTop: $(".make-up").offset().top
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

	// Init Tabs
	function initTabs1()
	{
		$('#verticalTab').jqTabs();
		$('#horizontalTab1').jqTabs({
			direction: 'horizontal',
			duration: 200
		})
	}
	function initTabs2()
	{
		$('#verticalTab').jqTabs();
		$('#horizontalTab2').jqTabs({
			direction: 'horizontal',
			duration: 200
		})
	}
	function initTabs3()
	{
		$('#verticalTab').jqTabs();
		$('#horizontalTab3').jqTabs({
			direction: 'horizontal',
			duration: 200
		})
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