(function ($) {
"use strict";

	// preloader
	//----------------------------------------------------------------------------------------
	$(window).on('load', function() {
		$("#loading").delay(500).fadeOut(500);
		$("#loading-center").click(function() {
		$("#loading").fadeOut(500);
		})
	})

	//=====  WOW active
	//----------------------------------------------------------------------------------------
	var wow = new WOW({
		boxClass: 'wow', //
		mobile: false, // 
	})
	wow.init();
		
	// meanmenu active
	//----------------------------------------------------------------------------------------
	jQuery('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991"
	});

	// Data-background
	//----------------------------------------------------------------------------------------
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	})

	// sticky
	//----------------------------------------------------------------------------------------
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 110) {
		$("#header-sticky").removeClass("sticky");
		} else {
		$("#header-sticky").addClass("sticky");
		}
	});

	// Show or hide the sticky footer button
	//----------------------------------------------------------------------------------------
	$(window).on('scroll', function(event) {
		if($(this).scrollTop() > 600){
			$('#scroll').fadeIn(200)
		} else{
			$('#scroll').fadeOut(200)
		}
	});

	//Animate the scroll to Top
	//----------------------------------------------------------------------------------------
	$('#scroll').on('click', function(event) {
		event.preventDefault();
		
		$('html, body').animate({
			scrollTop: 0,
		}, 1000);
	});

	// // One Page Nav
	// //----------------------------------------------------------------------------------------
	// var top_offset = $('.header-area').height() - 10;
	// $('.main-menu nav ul').onePageNav({
	//   currentClass: 'active',
	//   scrollOffset: top_offset
	// });


	// counterUp
	//----------------------------------------------------------------------------------------
	$('.counter').counterUp({
		delay: 10,
		time: 2000
	});

	// niceSelect
	//----------------------------------------------------------------------------------------
	$('select').niceSelect(); 

	// Jquery Appear
	//----------------------------------------------------------------------------------------
	if ($('.progress-bar').length) {
		$('.progress-bar').appear(function () {
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width', percent + '%');
		}, {
			accY: 0
		});
	}

	// Testimonial active
	//----------------------------------------------------------------------------------------
	$('.testimonial-active').slick({
		dots: false,
		fade: false,
		arrows: true,
		autoplay: false,
		speed: 1000,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: false
			}
		},
		{
			breakpoint: 991,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1
			}
		}
		]
	});
	

	// single-services-slide
	//----------------------------------------------------------------------------------------
	$('.single-services-slide').slick({
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i> Prev service</button>',
		nextArrow: '<button type="button" class="slick-next">Next service <i class="fas fa-arrow-right"></i></button>',
		speed: 1000,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			infinite: true,
			dots: false
			}
		},
		{
			breakpoint: 991,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1
			}
		}
		]
	});


	// blog active
	//---------------------------------------------------------------
	$('.blog-active').slick({
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
		infinite: true,
		autoplay: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
			dots: false
			}
		},
		{
			breakpoint: 993,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1
			}
		}
		]
	});


	// team active
	//---------------------------------------------------------------
	$('.team-active').slick({
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
		infinite: true,
		autoplay: false,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: true,
			dots: false
			}
		},
		{
			breakpoint: 991,
			settings: {
			slidesToShow: 3,
			slidesToScroll: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 1
			}
		}
		]
	});


	// Brand active
	//----------------------------------------------------------------------------------------
	$('.brand-active').slick({
		dots: false,
		arrows: false,
		infinite: true,
		autoplay: true,
		speed: 1000,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
			slidesToShow: 5,
			slidesToScroll: 1,
			infinite: true,
			dots: false
			}
		},
		{
			breakpoint: 991,
			settings: {
			slidesToShow: 4,
			slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
			slidesToShow: 3,
			slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 1
			}
		}
		]
	});

	// Pop-Up video
	$(".popup").modalVideo();


	// magnificPopup img view 
	//----------------------------------------------------------------------------------------
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
		enabled: true
		}
	});


	// tabs protflio
	//----------------------------------------------------------------------------------------
	$(window).load(function(){
		var $grid =  $('.item-active').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: 1
			}
		})
			// filter items on button click
		$('.item-menu').on( 'click', 'button', function() {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});
	});
		

	// tabs protflio-menu
	//----------------------------------------------------------------------------------------
		// filter items on button click
		$('.portfolio-menu').on( 'click', 'button', function() {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});	
		// change is-checked class on buttons
		$(".button-group").each(function(i, buttonGroup) {
			var $buttonGroup = $(buttonGroup);
			$buttonGroup.on("click", "button", function() {
				$buttonGroup.find(".is-checked").removeClass("is-checked");
				$(this).addClass("is-checked");
			});
		});
	
})(jQuery);	