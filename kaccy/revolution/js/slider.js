/*------------------------------------------------------------------------------*/
/*  Home_Page Slider
/*------------------------------------------------------------------------------*/

var revapi1,

  tpj;

  
  jQuery(function() {
    tpj = jQuery;
    if(tpj("#rev_slider_1_1").revolution == undefined){
      revslider_showDoubleJqueryError("#rev_slider_1_1");
    }else{
      revapi2 = tpj("#rev_slider_1_1").show().revolution({
        sliderLayout:"fullwidth",
        visibilityLevels:"1240,1240,778,480",
        gridwidth:"1240,1240,778,480",
        gridheight:"845,845,450,350",
        minHeight:"",
        spinner:"spinner0",
        editorheight:"845,768,450,350",
        responsiveLevels:"1240,1240,778,480",
        disableProgressBar:"on",
        navigation: {
          onHoverStop:true
        },
        parallax: {
          levels:[1,2,3,4,5,6,7,40,45,46,47,48,49,50,51,30],
          type:"mouse",
          origo:"slidercenter",
          speed:"200ms"
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid:true
        },
      });
    }
    
  });
      
    jQuery(function() {
      tpj = jQuery;
      if(tpj("#rev_slider_2_1").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_2_1");

      }else{
          revapi2 = tpj("#rev_slider_2_1").show().revolution({
          sliderLayout:"fullwidth",
          visibilityLevels:"1240,1024,778,480",
          gridwidth:"1240,1024,778,480",
          gridheight:"680,680,430,350",
          spinner:"spinner0",
          minHeight:"",
          editorheight:"680,680,430,350",
          responsiveLevels:"1240,1024,778,480",
          disableProgressBar:"on",
          navigation: {
            mouseScrollNavigation:false,
            onHoverStop:false,
            touch: {
              touchenabled:true
            },
            arrows: {
              enable:true,
              style:"uranus",
              hide_onmobile:true,
              hide_under:768,
              hide_onleave:true,
              left: {

              },
              right: {

              }
            }
          },
          fallbacks: {
            allowHTML5AutoPlayOnAndroid:true
          },
        });
      }
      
    });



    jQuery(function() {
      tpj = jQuery;
      if(tpj("#rev_slider_3_1").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_3_1");

      }else{
          revapi2 = tpj("#rev_slider_3_1").show().revolution({
          sliderLayout:"fullwidth",
          visibilityLevels:"1240,1200,778,480",
          gridwidth:"1240,1200,778,480",
          gridheight:"855,680,450,350",
          spinner:"spinner0",
          minHeight:"",
          editorheight:"855,680,450,350",
          responsiveLevels:"1240,1200,778,480",
          disableProgressBar:"on",
          navigation: {
          mouseScrollNavigation:false,
          onHoverStop:false,
          touch: {
              touchenabled:true
            },
            arrows: {
              enable:true,
              style:"uranus",
              hide_onmobile:true,
              hide_under:768,
              hide_onleave:true,
              left: {

              },
              right: {

              }
            }
          },
          fallbacks: {
            allowHTML5AutoPlayOnAndroid:true
          },
        });
      }
      
    });

    jQuery(function() {
    tpj = jQuery;
    if(tpj("#rev_slider_4_1").revolution == undefined){
      revslider_showDoubleJqueryError("#rev_slider_4_1");
    }else{
      revapi2 = tpj("#rev_slider_4_1").show().revolution({
        sliderLayout:"fullwidth",
        visibilityLevels:"1240,1240,778,480",
        gridwidth:"1240,1240,778,480",
        gridheight:"700,700,450,350",
        minHeight:"",
        spinner:"spinner0",
        editorheight:"700,768,450,350",
        responsiveLevels:"1240,1240,778,480",
        disableProgressBar:"on",
          navigation: {
          mouseScrollNavigation:false,
          onHoverStop:false,
          touch: {
              touchenabled:true
            },
            arrows: {
              enable:true,
              style:"uranus",
              hide_onmobile:true,
              hide_under:768,
              hide_onleave:true,
              left: {

              },
              right: {

              }
            }
          },
          fallbacks: {
            allowHTML5AutoPlayOnAndroid:true
          },
        });
      }
      
    });