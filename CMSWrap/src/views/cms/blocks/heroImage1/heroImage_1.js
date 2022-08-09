
export const  heroImage_1 = `
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script>
jQuery(document).ready(function($){
	//on mobile - open/close primary navigation clicking/tapping the menu icon
	$('.cd-primary-nav').on('click', function(event){
		if($(event.target).is('.cd-primary-nav')) $(this).children('ul').toggleClass('is-visible');
	});

	//upload videos if not on mobile
	uploadVideo($('.cd-hero-slider'));

	//change visible slide
	$('.cd-slider-nav li').on('click', function(event){
		event.preventDefault();
		var selectedItem = $(this);
		if(!selectedItem.hasClass('selected')) {
			// if it's not already selected
			var selectedPosition = selectedItem.index(),
				activePosition = $('.cd-hero-slider .selected').index();
			if( activePosition < selectedPosition) {
				nextSlide($('.cd-hero-slider'), $('.cd-slider-nav'), selectedPosition);
			} else {
				prevSlide($('.cd-hero-slider'), $('.cd-slider-nav'), selectedPosition);
			}

			updateNavigationMarker(selectedPosition+1);
		}
	});

	function nextSlide(container, pagination, n){
		var visibleSlide = container.find('.selected'),
			navigationDot = pagination.find('.selected');
		
		visibleSlide.removeClass('selected from-left from-right').addClass('is-moving').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			visibleSlide.removeClass('is-moving');
		});
		
		container.children('li').eq(n).addClass('selected from-right').prevAll().addClass('move-left');
		navigationDot.removeClass('selected')
		pagination.find('li').eq(n).addClass('selected');

		checkVideo(visibleSlide, container, n);
	}

	function prevSlide(container, pagination, n){
		var visibleSlide = container.find('.selected'),
			navigationDot = pagination.find('.selected');
		
		visibleSlide.removeClass('selected from-left from-right').addClass('is-moving').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			visibleSlide.removeClass('is-moving');
		});

		container.children('li').eq(n).addClass('selected from-left').removeClass('move-left').nextAll().removeClass('move-left');
		navigationDot.removeClass('selected');
		pagination.find('li').eq(n).addClass('selected');

		checkVideo(visibleSlide, container, n);
	}

	function uploadVideo(container) {
		container.find('.cd-bg-video-wrapper').each(function(){
			var videoWrapper = $(this);
			if( videoWrapper.is(':visible') ) {
				// if visible - we are not on a mobile device 
				var	videoUrl = videoWrapper.data('video'),
					video = $('<video loop><source src="'+videoUrl+'.mp4?token2=1432242975_9f000e6f57ccb7a41611bd6ecd0a79ca&aksessionid=0c574dd13641c95a&ns=4" type="video/mp4" /><source src="'+videoUrl+'.webm" type="video/webm" /></video>');
				video.appendTo(videoWrapper);
			}
		});
	}

	function checkVideo(hiddenSlide, container, n) {
		//check if a video outside the viewport is playing - if yes, pause it
		if( hiddenSlide.find('video').length > 0 ) hiddenSlide.find('video').get(0).pause();

		//check if the select slide contains a video element - if yes, play the video
		if( container.children('li').eq(n).find('video').length > 0 ) container.children('li').eq(n).find('video').get(0).play();
	}

	function updateNavigationMarker(n) {
		$('.cd-marker').removeClassPrefix('item').addClass('item-'+n);
	}

	$.fn.removeClassPrefix = function(prefix) {
		//remove all classes starting with 'prefix'
	    this.each(function(i, el) {
	        var classes = el.className.split(" ").filter(function(c) {
	            return c.lastIndexOf(prefix, 0) !== 0;
	        });
	        el.className = $.trim(classes.join(" "));
	    });
	    return this;
	};
});




  // 3D STUFF HERE //
jQuery(document).ready(function($) {
  //check media query
  var mediaQuery = window.getComputedStyle(document.querySelector('.cd-background-wrapper'), '::before').getPropertyValue('content').replace(/"/g, ''),
    //define store some initial variables
    halfWindowH = $(window).height() * 0.5,
    halfWindowW = $(window).width() * 0.5,
    //define a max rotation value (X and Y axises)
    maxRotationY = 18,
    maxRotationX = 18,
    aspectRatio;

  //detect if hero <img> has been loaded and evaluate its aspect-ratio
  $('.cd-floating-background').find('img').eq(0).load(function() {
    aspectRatio = $(this).width() / $(this).height();
    if (mediaQuery == 'web' && $('html').hasClass('preserve-3d')) initBackground();
  }).each(function() {
    //check if image was previously load - if yes, trigger load event
    if (this.complete) $(this).load();
  });

  //detect mouse movement
  $('.cd-background-wrapper').on('mousemove', function(event) {
    if (mediaQuery == 'web' && $('html').hasClass('preserve-3d')) {
      window.requestAnimationFrame(function() {
        moveBackground(event);
      });
    }
  });

  //on resize - adjust .cd-background-wrapper and .cd-floating-background dimentions and position
  $(window).on('resize', function() {
    mediaQuery = window.getComputedStyle(document.querySelector('.cd-background-wrapper'), '::before').getPropertyValue('content').replace(/"/g, '');
    if (mediaQuery == 'web' && $('html').hasClass('preserve-3d')) {
      window.requestAnimationFrame(function() {
        halfWindowH = $(window).height() * 0.5,
          halfWindowW = $(window).width() * 0.5;
        initBackground();
      });
    } else {
      $('.cd-background-wrapper').attr('style', '');
      $('.cd-floating-background').attr('style', '').removeClass('is-absolute');
    }
  });

  function initBackground() {
    var wrapperHeight = Math.ceil(halfWindowW * 2 / aspectRatio),
      proportions = (maxRotationY > maxRotationX) ? 1.1 / (Math.sin(Math.PI / 2 - maxRotationY * Math.PI / 180)) : 1.1 / (Math.sin(Math.PI / 2 - maxRotationX * Math.PI / 180)),
      newImageWidth = Math.ceil(halfWindowW * 2 * proportions),
      newImageHeight = Math.ceil(newImageWidth / aspectRatio),
      newLeft = halfWindowW - newImageWidth / 2,
      newTop = (wrapperHeight - newImageHeight) / 2;

    //set an height for the .cd-background-wrapper
    $('.cd-background-wrapper').css({
      'height': wrapperHeight,
    });
    //set dimentions and position of the .cd-background-wrapper		
    $('.cd-floating-background').addClass('is-absolute').css({
      'left': newLeft,
      'top': newTop,
      'width': newImageWidth,
    });
  }

  function moveBackground(event) {
    var rotateY = ((-event.pageX + halfWindowW) / halfWindowW) * maxRotationY,
      rotateX = ((event.pageY - halfWindowH) / halfWindowH) * maxRotationX;

    if (rotateY > maxRotationY) rotateY = maxRotationY;
    if (rotateY < -maxRotationY) rotateY = -maxRotationY;
    if (rotateX > maxRotationX) rotateX = maxRotationX;
    if (rotateX < -maxRotationX) rotateX = -maxRotationX;

    $('.cd-floating-background').css({
      '-moz-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
      '-webkit-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
      '-ms-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
      '-o-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
      'transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
    });
  }
});

/* 	Detect "transform-style: preserve-3d" support, or update csstransforms3d for IE10 ? #762
	https://github.com/Modernizr/Modernizr/issues/762 */
(function getPerspective() {
  var element = document.createElement('p'),
    html = document.getElementsByTagName('html')[0],
    body = document.getElementsByTagName('body')[0],
    propertys = {
      'webkitTransformStyle': '-webkit-transform-style',
      'MozTransformStyle': '-moz-transform-style',
      'msTransformStyle': '-ms-transform-style',
      'transformStyle': 'transform-style'
    };

  body.insertBefore(element, null);

  for (var i in propertys) {
    if (element.style[i] !== undefined) {
      element.style[i] = "preserve-3d";
    }
  }

  var st = window.getComputedStyle(element, null),
    transform = st.getPropertyValue("-webkit-transform-style") ||
    st.getPropertyValue("-moz-transform-style") ||
    st.getPropertyValue("-ms-transform-style") ||
    st.getPropertyValue("transform-style");

  if (transform !== 'preserve-3d') {
    html.className += ' no-preserve-3d';
  } else {
    html.className += ' preserve-3d';
  }
  document.body.removeChild(element);

})();
</script>
<style>
/* https://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, main {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}





/* cyrillic-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v13/DXI1ORHCpsQm3Vp6mXoaTa-j2U0lmluP9RWlSytm3ho.woff2) format('woff2');
  unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F;
}
/* cyrillic */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v13/DXI1ORHCpsQm3Vp6mXoaTZX5f-9o1vgP2EXwfjgl7AY.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v13/DXI1ORHCpsQm3Vp6mXoaTRWV49_lSm1NYrwo-zkhivY.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v13/DXI1ORHCpsQm3Vp6mXoaTaaRobkAwv3vxw3jMhVENGA.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v13/DXI1ORHCpsQm3Vp6mXoaTf8zf_FOSsgRmwsS7Aa9k2w.woff2) format('woff2');
  unicode-range: U+0102-0103, U+1EA0-1EF1, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v13/DXI1ORHCpsQm3Vp6mXoaTT0LW-43aMEzIO6XUTLjad8.woff2) format('woff2');
  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v13/DXI1ORHCpsQm3Vp6mXoaTegdm0LZdjqr5-oayXSOefg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: local('Open Sans'), local('OpenSans'), url(https://fonts.gstatic.com/s/opensans/v13/K88pR3goAWT7BTt32Z01mxJtnKITppOI_IvcXXDNrsc.woff2) format('woff2');
  unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F;
}
/* cyrillic */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: local('Open Sans'), local('OpenSans'), url(https://fonts.gstatic.com/s/opensans/v13/RjgO7rYTmqiVp7vzi-Q5URJtnKITppOI_IvcXXDNrsc.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: local('Open Sans'), local('OpenSans'), url(https://fonts.gstatic.com/s/opensans/v13/LWCjsQkB6EMdfHrEVqA1KRJtnKITppOI_IvcXXDNrsc.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: local('Open Sans'), local('OpenSans'), url(https://fonts.gstatic.com/s/opensans/v13/xozscpT2726on7jbcb_pAhJtnKITppOI_IvcXXDNrsc.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: local('Open Sans'), local('OpenSans'), url(https://fonts.gstatic.com/s/opensans/v13/59ZRklaO5bWGqF5A9baEERJtnKITppOI_IvcXXDNrsc.woff2) format('woff2');
  unicode-range: U+0102-0103, U+1EA0-1EF1, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: local('Open Sans'), local('OpenSans'), url(https://fonts.gstatic.com/s/opensans/v13/u-WUoqrET9fUeobQW7jkRRJtnKITppOI_IvcXXDNrsc.woff2) format('woff2');
  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: local('Open Sans'), local('OpenSans'), url(https://fonts.gstatic.com/s/opensans/v13/cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  src: local('Open Sans Semibold'), local('OpenSans-Semibold'), url(https://fonts.gstatic.com/s/opensans/v13/MTP_ySUJH_bn48VBG8sNSq-j2U0lmluP9RWlSytm3ho.woff2) format('woff2');
  unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F;
}
/* cyrillic */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  src: local('Open Sans Semibold'), local('OpenSans-Semibold'), url(https://fonts.gstatic.com/s/opensans/v13/MTP_ySUJH_bn48VBG8sNSpX5f-9o1vgP2EXwfjgl7AY.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  src: local('Open Sans Semibold'), local('OpenSans-Semibold'), url(https://fonts.gstatic.com/s/opensans/v13/MTP_ySUJH_bn48VBG8sNShWV49_lSm1NYrwo-zkhivY.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  src: local('Open Sans Semibold'), local('OpenSans-Semibold'), url(https://fonts.gstatic.com/s/opensans/v13/MTP_ySUJH_bn48VBG8sNSqaRobkAwv3vxw3jMhVENGA.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  src: local('Open Sans Semibold'), local('OpenSans-Semibold'), url(https://fonts.gstatic.com/s/opensans/v13/MTP_ySUJH_bn48VBG8sNSv8zf_FOSsgRmwsS7Aa9k2w.woff2) format('woff2');
  unicode-range: U+0102-0103, U+1EA0-1EF1, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  src: local('Open Sans Semibold'), local('OpenSans-Semibold'), url(https://fonts.gstatic.com/s/opensans/v13/MTP_ySUJH_bn48VBG8sNSj0LW-43aMEzIO6XUTLjad8.woff2) format('woff2');
  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  src: local('Open Sans Semibold'), local('OpenSans-Semibold'), url(https://fonts.gstatic.com/s/opensans/v13/MTP_ySUJH_bn48VBG8sNSugdm0LZdjqr5-oayXSOefg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v13/k3k702ZOKiLJc3WVjuplzK-j2U0lmluP9RWlSytm3ho.woff2) format('woff2');
  unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F;
}
/* cyrillic */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v13/k3k702ZOKiLJc3WVjuplzJX5f-9o1vgP2EXwfjgl7AY.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v13/k3k702ZOKiLJc3WVjuplzBWV49_lSm1NYrwo-zkhivY.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v13/k3k702ZOKiLJc3WVjuplzKaRobkAwv3vxw3jMhVENGA.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v13/k3k702ZOKiLJc3WVjuplzP8zf_FOSsgRmwsS7Aa9k2w.woff2) format('woff2');
  unicode-range: U+0102-0103, U+1EA0-1EF1, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v13/k3k702ZOKiLJc3WVjuplzD0LW-43aMEzIO6XUTLjad8.woff2) format('woff2');
  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v13/k3k702ZOKiLJc3WVjuplzOgdm0LZdjqr5-oayXSOefg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
}








/* -------------------------------- 

Primary style

-------------------------------- */
*, *::after, *::before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  font-family: "Open Sans", sans-serif;
  color: #2c343b;
  background-color: #f2f2f2;
}

a {
  color: #d44457;
  text-decoration: none;
}

img {
  max-width: 100%;
}

/* -------------------------------- 

Main Components 

-------------------------------- */
.cd-header {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #21272c;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@media only screen and (min-width: 768px) {
  .cd-header {
    height: 70px;
    background-color: transparent;
  }
}

#cd-logo {
  float: left;
  margin: 13px 0 0 5%;
}
#cd-logo img {
  display: block;
}
@media only screen and (min-width: 768px) {
  #cd-logo {
    margin: 23px 0 0 5%;
  }
}

.cd-primary-nav {
  /* mobile first - navigation hidden by default, triggered by tap/click on navigation icon */
  float: right;
  margin-right: 5%;
  width: 44px;
  height: 100%;
  background: url("https://codyhouse.co/demo/hero-slider/assets/cd-icon-menu.svg") no-repeat center center;
}
.cd-primary-nav ul {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  -webkit-transform: translateY(-100%);
  -moz-transform: translateY(-100%);
  -ms-transform: translateY(-100%);
  -o-transform: translateY(-100%);
  transform: translateY(-100%);
}
.cd-primary-nav ul.is-visible {
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  -webkit-transform: translateY(50px);
  -moz-transform: translateY(50px);
  -ms-transform: translateY(50px);
  -o-transform: translateY(50px);
  transform: translateY(50px);
}
.cd-primary-nav a {
  display: block;
  height: 50px;
  line-height: 50px;
  padding-left: 5%;
  background: #21272c;
  border-top: 1px solid #333c44;
  color: #ffffff;
}
@media only screen and (min-width: 768px) {
  .cd-primary-nav {
    /* reset navigation values */
    width: auto;
    height: auto;
    background: none;
  }
  .cd-primary-nav ul {
    position: static;
    width: auto;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
    line-height: 70px;
  }
  .cd-primary-nav ul.is-visible {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  .cd-primary-nav li {
    display: inline-block;
    margin-left: 1em;
  }
  .cd-primary-nav a {
    display: inline-block;
    height: auto;
    font-weight: 600;
    line-height: normal;
    background: transparent;
    padding: .6em 1em;
    border-top: none;
  }
}

/* -------------------------------- 

Slider

-------------------------------- */
.cd-hero {
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.cd-hero-slider {
  position: relative;
  height: 360px;
  overflow: hidden;
}
.cd-hero-slider li {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-transform: translateX(100%);
  -moz-transform: translateX(100%);
  -ms-transform: translateX(100%);
  -o-transform: translateX(100%);
  transform: translateX(100%);
}
.cd-hero-slider li.selected {
  /* this is the visible slide */
  position: relative;
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  -ms-transform: translateX(0);
  -o-transform: translateX(0);
  transform: translateX(0);
}
.cd-hero-slider li.move-left {
  /* slide hidden on the left */
  -webkit-transform: translateX(-100%);
  -moz-transform: translateX(-100%);
  -ms-transform: translateX(-100%);
  -o-transform: translateX(-100%);
  transform: translateX(-100%);
}
.cd-hero-slider li.is-moving, .cd-hero-slider li.selected {
  /* the is-moving class is assigned to the slide which is moving outside the viewport */
  -webkit-transition: -webkit-transform 0.5s;
  -moz-transition: -moz-transform 0.5s;
  transition: transform 0.5s;
}
@media only screen and (min-width: 768px) {
  .cd-hero-slider {
    height: 500px;
  }
}
@media only screen and (min-width: 1170px) {
  .cd-hero-slider {
    height: 680px;
  }
}

/* -------------------------------- 

Single slide style

-------------------------------- */
.cd-hero-slider li {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.cd-hero-slider li:first-of-type {
  background-color: #2c343b;
}
.cd-hero-slider li:nth-of-type(2) {
  background-color: #3d4952;
  background-image: url("https://codyhouse.co/demo/hero-slider/assets/tech-1-mobile.jpg");
}
.cd-hero-slider li:nth-of-type(3) {
  background-color: #586775;
  background-image: url("https://codyhouse.co/demo/hero-slider/assets/tech-2-mobile.jpg");
}
.cd-hero-slider li:nth-of-type(4) {
  background-color: #2c343b;
  background-image: url("https://codyhouse.co/demo/hero-slider/assets/video-replace-mobile.jpg");
}
.cd-hero-slider li:nth-of-type(5) {
  background-color: #2c343b;
  background-image: url(https://i.vimeocdn.com/video/222142554.webp?mw=1280&mh=720);
}
.cd-hero-slider li:nth-of-type(6) {
  background-color: #2c343b;
  /*background-image: url(https://i.vimeocdn.com/video/473131817.webp?mw=1280&mh=720);
*/
}
.cd-hero-slider .cd-full-width,
.cd-hero-slider .cd-half-width {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  left: 0;
  top: 0;
  /* this padding is used to align the text */
  padding-top: 100px;
  text-align: center;
  /* Force Hardware Acceleration in WebKit */
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
}
.cd-hero-slider .cd-img-container {
  /* hide image on mobile device */
  display: none;
}
.cd-hero-slider .cd-img-container img {
  position: absolute;
  left: 50%;
  top: 50%;
  bottom: auto;
  right: auto;
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  -o-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}
.cd-hero-slider .cd-bg-video-wrapper {
  /* hide video on mobile device */
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.cd-hero-slider .cd-bg-video-wrapper video {
  /* you won't see this element in the html, but it will be injected using js */
  display: block;
  min-height: 100%;
  min-width: 100%;
  max-width: none;
  height: auto;
  width: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  bottom: auto;
  right: auto;
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  -o-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}
.cd-hero-slider h2, .cd-hero-slider p {
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  line-height: 1.2;
  margin: 0 auto 14px;
  color: #ffffff;
  width: 90%;
  max-width: 400px;
}
.cd-hero-slider h2 {
  font-size: 2.4rem;
}
.cd-hero-slider p {
  font-size: 1.4rem;
  line-height: 1.4;
}
.cd-hero-slider .cd-btn {
  display: inline-block;
  padding: 1.2em 1.4em;
  margin-top: .8em;
  background-color: rgba(212, 68, 87, 0.9);
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: #ffffff;
  text-transform: uppercase;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  -webkit-transition: background-color 0.2s;
  -moz-transition: background-color 0.2s;
  transition: background-color 0.2s;
}
.cd-hero-slider .cd-btn.secondary {
  background-color: rgba(22, 26, 30, 0.8);
}
.cd-hero-slider .cd-btn:nth-of-type(2) {
  margin-left: 1em;
}
.no-touch .cd-hero-slider .cd-btn:hover {
  background-color: #d44457;
}
.no-touch .cd-hero-slider .cd-btn.secondary:hover {
  background-color: #161a1e;
}
@media only screen and (min-width: 768px) {
  .cd-hero-slider li:nth-of-type(2) {
    background-image: none;
  }
  .cd-hero-slider li:nth-of-type(3) {
    background-image: none;
  }
  .cd-hero-slider li:nth-of-type(4) {
    background-image: none;
  }
  .cd-hero-slider .cd-full-width,
  .cd-hero-slider .cd-half-width {
    /*padding-top: 150px;*/
  }
  .cd-hero-slider .cd-bg-video-wrapper {
    display: block;
  }
  .cd-hero-slider .cd-half-width {
    width: 45%;
  }
  .cd-hero-slider .cd-half-width:first-of-type {
    left: 5%;
  }
  .cd-hero-slider .cd-half-width:nth-of-type(2) {
    right: 5%;
    left: auto;
  }
  .cd-hero-slider .cd-img-container {
    display: block;
  }
  .cd-hero-slider h2, .cd-hero-slider p {
    max-width: 520px;
  }
  .cd-hero-slider h2 {
    font-size: 2.4em;
    font-weight: 300;
  }
  .cd-hero-slider .cd-btn {
    font-size: 1.4rem;
  }
}
@media only screen and (min-width: 1170px) {
  .cd-hero-slider .cd-full-width,
  .cd-hero-slider .cd-half-width {
    padding-top: 220px;
  }
  .cd-hero-slider h2, .cd-hero-slider p {
    margin-bottom: 20px;
  }
  .cd-hero-slider h2 {
    font-size: 3.2em;
  }
  .cd-hero-slider p {
    font-size: 1.6rem;
  }
}

/* -------------------------------- 

Single slide animation

-------------------------------- */
@media only screen and (min-width: 768px) {
  .cd-hero-slider .cd-half-width {
    opacity: 0;
    -webkit-transform: translateX(40px);
    -moz-transform: translateX(40px);
    -ms-transform: translateX(40px);
    -o-transform: translateX(40px);
    transform: translateX(40px);
  }
  .cd-hero-slider .move-left .cd-half-width {
    -webkit-transform: translateX(-40px);
    -moz-transform: translateX(-40px);
    -ms-transform: translateX(-40px);
    -o-transform: translateX(-40px);
    transform: translateX(-40px);
  }
  .cd-hero-slider .selected .cd-half-width {
    /* this is the visible slide */
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  .cd-hero-slider .is-moving .cd-half-width {
    /* this is the slide moving outside the viewport 
    wait for the end of the transition on the <li> parent before set opacity to 0 and translate to 40px/-40px */
    -webkit-transition: opacity 0s 0.5s, -webkit-transform 0s 0.5s;
    -moz-transition: opacity 0s 0.5s, -moz-transform 0s 0.5s;
    transition: opacity 0s 0.5s, transform 0s 0.5s;
  }
  .cd-hero-slider li.selected.from-left .cd-half-width:nth-of-type(2),
  .cd-hero-slider li.selected.from-right .cd-half-width:first-of-type {
    /* this is the selected slide - different animation if it's entering from left or right */
    -webkit-transition: opacity 0.4s 0.2s, -webkit-transform 0.5s 0.2s;
    -moz-transition: opacity 0.4s 0.2s, -moz-transform 0.5s 0.2s;
    transition: opacity 0.4s 0.2s, transform 0.5s 0.2s;
  }
  .cd-hero-slider li.selected.from-left .cd-half-width:first-of-type,
  .cd-hero-slider li.selected.from-right .cd-half-width:nth-of-type(2) {
    /* this is the selected slide - different animation if it's entering from left or right */
    -webkit-transition: opacity 0.4s 0.4s, -webkit-transform 0.5s 0.4s;
    -moz-transition: opacity 0.4s 0.4s, -moz-transform 0.5s 0.4s;
    transition: opacity 0.4s 0.4s, transform 0.5s 0.4s;
  }
  .cd-hero-slider .cd-full-width h2,
  .cd-hero-slider .cd-full-width p,
  .cd-hero-slider .cd-full-width .cd-btn {
    opacity: 0;
    -webkit-transform: translateX(100px);
    -moz-transform: translateX(100px);
    -ms-transform: translateX(100px);
    -o-transform: translateX(100px);
    transform: translateX(100px);
  }
  .cd-hero-slider .move-left .cd-full-width h2,
  .cd-hero-slider .move-left .cd-full-width p,
  .cd-hero-slider .move-left .cd-full-width .cd-btn {
    opacity: 0;
    -webkit-transform: translateX(-100px);
    -moz-transform: translateX(-100px);
    -ms-transform: translateX(-100px);
    -o-transform: translateX(-100px);
    transform: translateX(-100px);
  }
  .cd-hero-slider .selected .cd-full-width h2,
  .cd-hero-slider .selected .cd-full-width p,
  .cd-hero-slider .selected .cd-full-width .cd-btn {
    /* this is the visible slide */
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  .cd-hero-slider li.is-moving .cd-full-width h2,
  .cd-hero-slider li.is-moving .cd-full-width p,
  .cd-hero-slider li.is-moving .cd-full-width .cd-btn {
    /* this is the slide moving outside the viewport 
    wait for the end of the transition on the li parent before set opacity to 0 and translate to 100px/-100px */
    -webkit-transition: opacity 0s 0.5s, -webkit-transform 0s 0.5s;
    -moz-transition: opacity 0s 0.5s, -moz-transform 0s 0.5s;
    transition: opacity 0s 0.5s, transform 0s 0.5s;
  }
  .cd-hero-slider li.selected h2 {
    -webkit-transition: opacity 0.4s 0.2s, -webkit-transform 0.5s 0.2s;
    -moz-transition: opacity 0.4s 0.2s, -moz-transform 0.5s 0.2s;
    transition: opacity 0.4s 0.2s, transform 0.5s 0.2s;
  }
  .cd-hero-slider li.selected p {
    -webkit-transition: opacity 0.4s 0.3s, -webkit-transform 0.5s 0.3s;
    -moz-transition: opacity 0.4s 0.3s, -moz-transform 0.5s 0.3s;
    transition: opacity 0.4s 0.3s, transform 0.5s 0.3s;
  }
  .cd-hero-slider li.selected .cd-btn {
    -webkit-transition: opacity 0.4s 0.4s, -webkit-transform 0.5s 0.4s, background-color 0.2s 0s;
    -moz-transition: opacity 0.4s 0.4s, -moz-transform 0.5s 0.4s, background-color 0.2s 0s;
    transition: opacity 0.4s 0.4s, transform 0.5s 0.4s, background-color 0.2s 0s;
  }
}
/* -------------------------------- 

Slider navigation

-------------------------------- */
.cd-slider-nav {
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 2;
  text-align: center;
  height: 55px;
  background-color: rgba(0, 1, 1, 0.5);
}
.cd-slider-nav nav, .cd-slider-nav ul, .cd-slider-nav li, .cd-slider-nav a {
  height: 100%;
}
.cd-slider-nav nav {
  display: inline-block;
  position: relative;
}
.cd-slider-nav .cd-marker {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 100%;
  color: #d44457;
  background-color: #ffffff;
  box-shadow: inset 0 2px 0 currentColor;
  -webkit-transition: -webkit-transform 0.2s, box-shadow 0.2s;
  -moz-transition: -moz-transform 0.2s, box-shadow 0.2s;
  transition: transform 0.2s, box-shadow 0.2s;
}
.cd-slider-nav .cd-marker.item-2 {
  -webkit-transform: translateX(100%);
  -moz-transform: translateX(100%);
  -ms-transform: translateX(100%);
  -o-transform: translateX(100%);
  transform: translateX(100%);
}
.cd-slider-nav .cd-marker.item-3 {
  -webkit-transform: translateX(200%);
  -moz-transform: translateX(200%);
  -ms-transform: translateX(200%);
  -o-transform: translateX(200%);
  transform: translateX(200%);
}
.cd-slider-nav .cd-marker.item-4 {
  -webkit-transform: translateX(300%);
  -moz-transform: translateX(300%);
  -ms-transform: translateX(300%);
  -o-transform: translateX(300%);
  transform: translateX(300%);
}
.cd-slider-nav .cd-marker.item-5 {
  -webkit-transform: translateX(400%);
  -moz-transform: translateX(400%);
  -ms-transform: translateX(400%);
  -o-transform: translateX(400%);
  transform: translateX(400%);
}
.cd-slider-nav ul::after {
  clear: both;
  content: "";
  display: table;
}
.cd-slider-nav li {
  display: inline-block;
  width: 60px;
  float: left;
}
.cd-slider-nav li.selected a {
  color: #2c343b;
}
.no-touch .cd-slider-nav li.selected a:hover {
  background-color: transparent;
}
.cd-slider-nav a {
  display: block;
  position: relative;
  padding-top: 35px;
  font-size: 1rem;
  font-weight: 700;
  color: #a8b4be;
  -webkit-transition: background-color 0.2s;
  -moz-transition: background-color 0.2s;
  transition: background-color 0.2s;
}
.cd-slider-nav a::before {
  content: '';
  position: absolute;
  width: 24px;
  height: 24px;
  top: 8px;
  left: 50%;
  right: auto;
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);
  background: url(https://codyhouse.co/demo/hero-slider/assets/cd-icon-navigation.svg) no-repeat 0 0;
}
.no-touch .cd-slider-nav a:hover {
  background-color: rgba(0, 1, 1, 0.5);
}
.cd-slider-nav li:first-of-type a::before {
  background-position: 0 0;
}
.cd-slider-nav li.selected:first-of-type a::before {
  background-position: 0 -24px;
}
.cd-slider-nav li:nth-of-type(2) a::before {
  background-position: -24px 0;
}
.cd-slider-nav li.selected:nth-of-type(2) a::before {
  background-position: -24px -24px;
}
.cd-slider-nav li:nth-of-type(3) a::before {
  background-position: -48px 0;
}
.cd-slider-nav li.selected:nth-of-type(3) a::before {
  background-position: -48px -24px;
}
.cd-slider-nav li:nth-of-type(4) a::before {
  background-position: -72px 0;
}
.cd-slider-nav li.selected:nth-of-type(4) a::before {
  background-position: -72px -24px;
}
.cd-slider-nav li:nth-of-type(5) a::before {
  background-position: -96px 0;
}
.cd-slider-nav li.selected:nth-of-type(5) a::before {
  background-position: -96px -24px;
}
.cd-slider-nav li:nth-of-type(6) a::before {
  background-position: -96px 0;
}
.cd-slider-nav li.selected:nth-of-type(6) a::before {
  background-position: -96px -24px;
}
@media only screen and (min-width: 768px) {
  .cd-slider-nav {
    height: 80px;
  }
  .cd-slider-nav .cd-marker,
  .cd-slider-nav li {
    width: 95px;
  }
  .cd-slider-nav a {
    padding-top: 48px;
    font-size: 1.1rem;
    text-transform: uppercase;
  }
  .cd-slider-nav a::before {
    top: 18px;
  }
}

/* -------------------------------- 

Main content

-------------------------------- */
.cd-main-content {
  width: 90%;
  max-width: 768px;
  margin: 0 auto;
  padding: 2em 0;
}
.cd-main-content p {
  font-size: 1.4rem;
  line-height: 1.8;
  color: #999999;
  margin: 2em 0;
}
@media only screen and (min-width: 1170px) {
  .cd-main-content {
    padding: 3em 0;
  }
  .cd-main-content p {
    font-size: 1.6rem;
  }
}

/* -------------------------------- 

Javascript disabled

-------------------------------- */
.no-js .cd-hero-slider li {
  display: none;
}
.no-js .cd-hero-slider li.selected {
  display: block;
}

.no-js .cd-slider-nav {
  display: none;
}

/*3D STUFF*/

/* -------------------------------- 

Main Components 

-------------------------------- */
.cd-background-wrapper {
  background-color: #001426;
  position: relative;
  overflow: hidden;
}
.no-touch .cd-background-wrapper {
  -webkit-perspective: 4000px;
  -moz-perspective: 4000px;
  perspective: 4000px;
}
.cd-background-wrapper::before {
  /* never visible - this is used in jQuery to check the device type */
  content: 'web';
  display: none;
}
.touch .cd-background-wrapper::before {
  /* never visible - this is used in jQuery to check the device type */
  content: 'mobile';
}

.cd-floating-background {
  position: relative;
}
.cd-floating-background img {
  display: block;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  /* fixes a Firefox bug - images not correctly rendered*/
  background-color: rgba(255, 255, 255, 0.01);
}
.cd-floating-background img:not(:first-child) {
  position: absolute;
  top: 0;
  left: 0;
}
.no-touch .cd-floating-background {
  top: 0;
  left: 0;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
}
.no-touch .cd-floating-background.is-absolute {
  position: absolute;
}
.no-touch .cd-floating-background img:first-child {
  -webkit-transform: translateZ(50px);
  -moz-transform: translateZ(50px);
  -ms-transform: translateZ(50px);
  -o-transform: translateZ(50px);
  transform: translateZ(50px);
}
.no-touch .cd-floating-background img:nth-child(2) {
  -webkit-transform: translateZ(290px);
  -moz-transform: translateZ(290px);
  -ms-transform: translateZ(290px);
  -o-transform: translateZ(290px);
  transform: translateZ(290px);
}
.no-touch .cd-floating-background img:nth-child(3) {
  -webkit-transform: translateZ(400px);
  -moz-transform: translateZ(400px);
  -ms-transform: translateZ(400px);
  -o-transform: translateZ(400px);
  transform: translateZ(400px);
}
.no-touch.no-preserve-3d .cd-floating-background {
  /* we target browsers that don't support preserve-3d and show just a standard image - no effect visible */
  position: relative;
}

</style>
<section class="cd-hero">
   <ul class="cd-hero-slider">
      <li class="selected">
         <div class="cd-full-width">
            <h2>Hero slider</h2>
            <p>A simple, responsive slideshow in CSS &amp; jQuery.</p>
            <a href="https://codyhouse.co/?p=675" class="cd-btn">Article &amp; Download</a>
         </div>
         <!-- .cd-full-width -->
      </li>
      <li>
         <div class="cd-half-width">
            <h2>Slide title here</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In consequatur cumque natus!</p>
            <a href="#0" class="cd-btn">Start</a>
            <a href="#0" class="cd-btn secondary">Learn More</a>
         </div>
         <!-- .cd-half-width -->
         <div class="cd-half-width cd-img-container">
            <img src="https://codyhouse.co/demo/hero-slider/assets/tech-1.jpg" alt="tech 1">
         </div>
         <!-- .cd-half-width.cd-img-container -->
      </li>
      <li>
         <div class="cd-half-width cd-img-container">
            <img src="https://codyhouse.co/demo/hero-slider/assets/tech-2.jpg" alt="tech 2">
         </div>
         <!-- .cd-half-width.cd-img-container -->
         <div class="cd-half-width">
            <h2>Slide title here</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In consequatur cumque natus!</p>
            <a href="#0" class="cd-btn">Start</a>
            <a href="#0" class="cd-btn secondary">Learn More</a>
         </div>
         <!-- .cd-half-width -->
      </li>
      <li class="cd-bg-video">
         <div class="cd-full-width">
            <h2>Slide title here</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, explicabo.</p>
            <a href="#0" class="cd-btn">Learn more</a>
         </div>
         <!-- .cd-full-width -->
         <!--<div class="cd-bg-video-wrapper" data-video="https://codyhouse.co/demo/hero-slider/assets/video/video">-->
         <div class="cd-bg-video-wrapper" data-video="https://avvimeo-a.akamaihd.net/09682/750/74745479">
            <!-- video element will be loaded using jQuery -->
         </div>
         <!-- .cd-bg-video-wrapper -->
      </li>
      <li>
         <div class="cd-full-width" style="background:url(https://i.vimeocdn.com/video/222142554.webp?mw=1280&mh=720) no-repeat 50% 50%;background-size:cover">
            <!--<h2>PROFESSIONal</h2>-->
            <p class="professional">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, explicabo.</p>
            <a href="#0" class="cd-btn">Start</a>
            <a href="#0" class="cd-btn secondary">Learn More</a>
         </div>
         <!-- .cd-full-width -->
      </li>
      <li>
         <div class="cd-full-width">
            <!-- .begin 3D STUFF HERE -->
            <div class="cd-background-wrapper">
               <figure class="cd-floating-background is-absolute">
                  <img src="https://i.vimeocdn.com/video/476215411.webp?mw=1280&mh=720" alt="image-1">
               </figure>
            </div>
            <!-- .end 3D STUFF HERE -->
         </div>
         <!-- .cd-full-width -->
      </li>
   </ul>
   <!-- .cd-hero-slider -->
   <div class="cd-slider-nav">
      <nav>
         <span class="cd-marker item-1"></span>
         <ul>
            <li class="selected"><a href="#0">Intro</a></li>
            <li><a href="#0">Tech 1</a></li>
            <li><a href="#0">Tech 2</a></li>
            <li><a href="#0">Video</a></li>
            <li><a href="#0">Image</a></li>
            <li><a href="#0">Image 2</a></li>
         </ul>
      </nav>
   </div>
   <!-- .cd-slider-nav -->
</section>
<!-- .cd-hero -->

`;