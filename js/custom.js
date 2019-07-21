/* JS Document */

/******************************

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Home Slider
5. Init App
6. Init SVG
7. Init Scrolling
8. Init Services Slider
9. Init Testimonials Slider
10. Init Gallery
11. Init Services Slider
12. Init Popular Posts Slider
13. Init Parallax

******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');

	initMenu();
	initHomeSlider();
	initApp();
	initSvg();
	initScrolling();
	initServicesSlider();
	initTestimonialsSlider();
	initGallery();
	initArticleSlider()
	initSingleSlider()
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

	/* 

	2. Set Header

	*/

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

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if($('.menu').length)
		{
			var menu = $('.menu');
			var hamburger = $('.hamburger');

			hamburger.on('click', function()
			{
				closeApp();
				menu.toggleClass('active');
				hamburger.toggleClass('active');
			});
		}
	}

	/* 

	4. Init Home Slider

	*/

	function initHomeSlider()
	{
		if($('.home_slider').length)
		{
			var homeSlider = $('.home_slider');
			var slideBar = $('.slide_bar > div');
			var slideNum = $('.slide_num');
			var currentPage = 0;

			// Initialized has to go before the slider initialization
			homeSlider.on('initialized.owl.carousel', function(event)
			{
				slideBar.css({width: "100%", transition: "width 8000ms"});
			});

			homeSlider.owlCarousel(
			{
				items:1,
				loop:true,
				autoplay:true,
				autoplayTimeout:8000,
				nav:false,
				dots:false,
				smartSpeed:1200,
				mouseDrag:false
			});

			homeSlider.on('translate.owl.carousel', function(event)
			{
				slideBar.css({width: "0%", transition: "width 0s"});
			});

			homeSlider.on('translated.owl.carousel', function(event)
			{
				//subtract smartSpeed value from the autoplayTimeout value
				slideBar.css({width: "100%", transition: "width 6800ms"});
				currentPage = (event.item.index - 1).toString();
				if(currentPage.length === 1)
				{
					currentPage = "0" + currentPage + ".";
				}
				else
				{
					currentPage = currentPage + ".";
				}
				slideNum.text(currentPage);
			});

			// Fired before current slide change
			homeSlider.on('change.owl.carousel', function(event)
			{
				var $currentItem = $('.home_slide', homeSlider).eq(event.item.index);
				var $elemsToanim = $currentItem.find("[data-animation-out]");
				setAnimation ($elemsToanim, 'out');
			});

			// Fired after current slide has been changed
			homeSlider.on('changed.owl.carousel', function(event)
			{
				var $currentItem = $('.home_slide', homeSlider).eq(event.item.index);
				var $elemsToanim = $currentItem.find("[data-animation-in]");
				setAnimation ($elemsToanim, 'in');
			});

			// add animate.css class(es) to the elements to be animated
			function setAnimation ( _elem, _InOut )
			{
				// Store all animationend event name in a string.
				// cf animate.css documentation
				var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

				_elem.each ( function ()
				{
					var $elem = $(this);
					var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

					$elem.addClass($animationType).one(animationEndEvent, function ()
					{
						$elem.removeClass($animationType); // remove animate.css Class at the end of the animations
					});
				});
			}
			
		}
	}

	/* 

	5. Init App

	*/

	function initApp()
	{
		if($('.app').length)
		{
			var btn = $('.app_button');
			var close = $('.app_button_close');
			btn.on('click', function()
			{
				if(!$('.menu').hasClass('active'))
				{
					openApp();
				}
			});

			close.on('click', function()
			{
				closeApp();
			});
		}
	}

	function openApp()
	{
		var app = $('.app');
		var content = $('.app_content');
		app.addClass('active');
		content.addClass('active');
	}

	function closeApp(app, content)
	{
		var app = $('.app');
		var content = $('.app_content');
		app.removeClass('active');
		content.removeClass('active');
	}

	/* 

	6. Init SVG

	*/

	function initSvg()
	{
		if($('img.svg').length)
		{
			jQuery('img.svg').each(function()
			{
				var $img = jQuery(this);
				var imgID = $img.attr('id');
				var imgClass = $img.attr('class');
				var imgURL = $img.attr('src');

				jQuery.get(imgURL, function(data)
				{
					// Get the SVG tag, ignore the rest
					var $svg = jQuery(data).find('svg');

					// Add replaced image's ID to the new SVG
					if(typeof imgID !== 'undefined') {
					$svg = $svg.attr('id', imgID);
					}
					// Add replaced image's classes to the new SVG
					if(typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass+' replaced-svg');
					}

					// Remove any invalid XML tags as per http://validator.w3.org
					$svg = $svg.removeAttr('xmlns:a');

					// Replace image with new SVG
					$img.replaceWith($svg);
				}, 'xml');
			});
		}	
	}

	/* 

	7. Init Scrolling

	*/

	function initScrolling()
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

	/* 

	8. Init Services Slider

	*/

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

	/* 

	9. Init Testimonials Slider

	*/

	function initTestimonialsSlider()
	{
		if($('.testimonials_slider').length)
		{
			var testimonialsSlider = $('.testimonials_slider');
			testimonialsSlider.owlCarousel(
			{
				items:3,
				loop:true,
				autoplay:true,
				nav:false,
				dots:false,
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

	/* 

	10. Init Gallery

	*/

	function initGallery()
	{
		if($('.gallery_slider').length)
		{
			var gallerySlider = $('.gallery_slider');
			gallerySlider.owlCarousel(
			{
				items:5,
				autoplay:true,
				loop:true,
				nav:false,
				dots:false,
				smartSpeed:1200,
				responsive:
				{
					0:
					{
						items:1
					},
					576:
					{
						items:2
					},
					860:
					{
						items:3
					},
					1240:
					{
						items:4
					},
					1600:
					{
						items:5
					}
				}
			});
		}

		if($('.gallery_item').length)
		{
			$('.colorbox').colorbox(
			{
				rel:'colorbox',
				photo: true,
				maxWidth:'95%',
				maxHeight:'95%'
			});
		}

		$(window).on('resize', function()
		{
			gallerySlider.trigger('refresh.owl.carousel');
		});
	}

	/* 

	11. Init Services Slider

	*/

	function initArticleSlider()
	{
		if($('.article_slider').length)
		{
			var articleSlider = $('.article_slider');
			articleSlider.owlCarousel(
			{
				items:3,
				loop:true,
				autoplay:true,
				dots:false,
				nav:false,
				smartSpeed:1200,
				margin:30,
				responsive:
				{
					0:{items:1},
					768:{items:2},
					1200:{items:3}
				}
			});
		}
	}

	/* 

	12. Init Popular Posts Slider

	*/

	function initSingleSlider()
	{
		if($('.single_slider').length)
		{
			var singleSlider = $('.single_slider');
			singleSlider.owlCarousel(
			{
				items:1,
				loop:true,
				autoplay:true,
				autoplayTimeout:8000,
				autoplayHoverPause:true,
				nav:false,
				dots:false,
				smartSpeed:1200
			});
		}
	}
	
	/* 

	13. Init Parallax

	*/

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