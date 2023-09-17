
$(document).ready(function(){

	"use strict";
	

	/* =================================
	LOADER 
	=================================== */
	$(".loader").delay(400).fadeOut();
    $(".animationload").delay(400).fadeOut("fast");
	
	
	
	/* =================================
	SCROLLSPY 
	=================================== */
	$('body').scrollspy({ target: '#navbar-example' });
	
	
	/* =================================
	STIKY NAVBAR 
	=================================== */
	jQuery(window).scroll(function () {
	  var top = jQuery(document).scrollTop();
		var batas = jQuery(window).height() - 100;
	  //alert(batas);
	  
	  if (top > batas) {
		jQuery('.navbar-main').addClass('stiky');
	  } else {
	   jQuery('.navbar-main').removeClass('stiky'); 
	  }
	});
	
	
	/* =================================
	SCROLL TO
	=================================== */
	var htmlbody = $('html,body');
	
	var button = $('.navbar-nav li a'),
		buy = $('.event-right a');
	
	button.on('click', function(e){
        var dataslide = $(this).attr('href');
		goToByScroll(dataslide);
    });
	
	buy.on('click', function(e){
        var dataslide = $(this).attr('href');
		goToByScroll(dataslide);
    });
	
	function goToByScroll(mc) {
		htmlbody = $('html,body');
		htmlbody.animate({
			scrollTop: $( mc ).offset().top
		}, 1000);
	}
	
	
	/* =================================
	MAGNIFIC POPUP
	=================================== */
	
	$('.popup-gallery').magnificPopup({
	  delegate: 'a',
	  type: 'image',
	  tLoading: 'Loading image #%curr%...',
	  mainClass: 'mfp-img-mobile',
	  gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0,1]
	  },
	  image: {
		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		titleSrc: function(item) {
		  return item.el.attr('title') + '';
		}
	  }
	});
	
	
	
	/* =================================
	OWL
	=================================== */
	var owl = $("#owl-comedian");
	owl.owlCarousel({
		autoPlay: 10000,
		items : 2,
		itemsDesktop : [1199,2],
		itemsMobile : [479,1],
		singleItem : false,
	});
	
		/* =================================
	Radio Player
	http://stream.live.vc.bbcmedia.co.uk/bbc_radio_one
	=================================== */

	
	waveAfterWave();

	//gallery code

	
	
});

//const audio = new Audio("https://stream.zeno.fm/vfkk2o41inzuv");

var player = document.getElementById('radioPlayer');
	
	$('.button-play').click(function() {
		icon = $(this).find('i');

		player.play();
		
	
		$('.wave').removeClass('no-animation');
		
	  });

	$('.button-stop').click(function() {
	icon = $('.button-play').find('i');
	player.src="";

	waveAfterWave();
	player.src="https://stream.zeno.fm/vfkk2o41inzuv";
	
	
	});



	//   $('.button-play').click(function() {
	// 	icon = $(this).find('i');
		
	// 	if (icon.hasClass('fa-play')) {

	// 		if (player.src == ""){
	// 			player.src = "http://170.64.130.237:8000/stream";
				
	// 	  }

			
	// 	} 
	//   });
	  
	//   $('.button-stop').click(function() {
	// 	icon = $('.button-play').find('i');
	// 	player.src = "";
		
	// 	$('.wave').removeClass('no-animation');
	//   });

	// if (icon.hasClass('fa-pause')) {
	// 	icon.removeClass('fa-pause');
	// 	icon.addClass('fa-play');
	// 	if (player.src != "https://stream.zeno.fm/vfkk2o41inzuv"){
	// 		  player.src = "https://stream.zeno.fm/vfkk2o41inzuv";
	// 	}
	// 		player.pause();
	// 	waveAfterWave();
	//   } else {
	// 	icon.removeClass('fa-play');
	// 	icon.addClass('fa-pause');
	// 	player.play();
	// 	$('.wave').removeClass('no-animation');
	//   }
	

function waveAfterWave() {
	$('.wave').each(function(){
	  height = $(this).height();
	  $(this).css('height', height);
	});
	$('.wave').addClass('no-animation');
  };

// gallery code script





  
  
