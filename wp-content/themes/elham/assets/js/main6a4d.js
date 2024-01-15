/* -----------------------------------------------
					Js Main
--------------------------------------------------

    Template Name: Elham - Personal Portfolio Template
    Author: Ali Ramezankhani
    Copyright: 2019

--------------------------------------------------

Table of Content

	1. Preloader
	2. Sound Start
	3. Isotope Portfolio Setup
	4. Blogs Masonry Setup
	5. Active Current Link
	6. Mobile Toggle Click Setup
	7. Testimonials OwlCarousel
	8. Chart Setup
	9. Portfolio Tilt Setup
	10. Portfolio Image Link
	11. Portfolio Video Link
	12. Blog Video Link
    13. Validate Contact Form
    
----------------------------------- */

jQuery(window).on('load', function() {
		
	/* -----------------------------------
				1. Preloader
	----------------------------------- */
	jQuery("#preloader").delay(1000).addClass('loaded');
	
	/* -----------------------------------
			  2. Sound Setup
	----------------------------------- */
	//jQuery('body').append('<audio loop autoplay volume="0" id="audio-player"><source src="music.mp3" type="audio/mpeg"></audio>');
    var audio = document.getElementById("audio-player");
    if(audio){
    	audio.volume = 0.2;
	
        if(jQuery(window).length) {
            jQuery('.music-bg').css({'visibility':'visible'});
            jQuery('body').addClass("audio-on");
            if (jQuery('body').hasClass('audio-off')) {
                jQuery('body').removeClass('audio-on');
            } 
            jQuery(".music-bg").on('click', function() {
                jQuery('body').toggleClass("audio-on audio-off");         
                if (jQuery('body').hasClass('audio-off')) {
                    audio.pause();
                } 
                if (jQuery('body').hasClass('audio-on')) {
                    audio.play();
                }
            });
        }
    }
	
	/* -----------------------------------
			3. Isotope Portfolio Setup
	----------------------------------- */
    if( jQuery('.portfolio-items').length ) {
        var $elements = jQuery(".portfolio-items"),
            $filters = jQuery('.portfolio-filter ul li');
        $elements.isotope({ layoutMode: 'masonry', isOriginLeft: false });

        $filters.on('click', function(){
            $filters.removeClass('active');
            jQuery(this).addClass('active');
            var selector = jQuery(this).data('filter');
            jQuery(".portfolio-items").isotope({
                filter: selector,
                hiddenStyle: {
                    transform: 'scale(.2) skew(30deg)',
                    opacity: 0
                },
                visibleStyle: {
                    transform: 'scale(1) skew(0deg)',
                    opacity: 1,
                },
                transitionDuration: '.5s'
            });
        });
    }
	
	/* -----------------------------------
			4. Blogs Masonry Setup
	----------------------------------- */
    jQuery('.blog-masonry').isotope({ layoutMode: 'moduloColumns' });
	
});

jQuery(document).ready(function() {
    "use strict";
	
	/* -----------------------------------
			5. Active Current Link
	----------------------------------- */
    jQuery('.header-main ul li a').on('click',function() {
        if(jQuery('.header-main.on').length) {
            jQuery('.header-main').removeClass('on');
        }
    });
	
	/* -----------------------------------
		    6. Mobile Toggle Click Setup
	----------------------------------- */
    jQuery('.header-toggle').on('click', function() {
        jQuery('.header-main').toggleClass('on');
    });
	
	/* -----------------------------------
	        7. Testimonials OwlCarousel
	----------------------------------- */
	jQuery(".testimonial .owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        smartSpeed: 500,
        responsiveClass: true,
        dots: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            800: {
                items: 1,
            },
            1000: {
                items: 2,
            },
        },
    });
	
	/* -----------------------------------
	      	8. Chart Setup
	----------------------------------- */
	if (jQuery('.chart').length > 0) {
	    jQuery('.chart').easyPieChart({
          trackColor:'#0e0f10',
	      scaleColor:false,
	      easing: 'easeOutBounce',
	      scaleLength: 4,
	      lineCap: 'square',
	      lineWidth:5,
	      size:130,
	      animate: {
	                duration: 2500,
	                enabled: true
	    	}
	 	});
	 }
	
	/* -----------------------------------
	      	9. Portfolio Tilt Setup
	----------------------------------- */
    jQuery('.pt-portfolio .portfolio-items .item figure').tilt({
        maxTilt: 3,
        glare: true,
        maxGlare: .6,
        reverse: true
    });
	
	/* -----------------------------------
	      10. Portfolio Image Link
	----------------------------------- */
	jQuery(".portfolio-items .image-link").magnificPopup({
		type: "image"
	});
	
	/* -----------------------------------
	      11. Portfolio Video Link
	----------------------------------- */
	jQuery(".portfolio-items .video-link").magnificPopup({
		type: "iframe"
	});
	
	/* -----------------------------------
	      12. Blog Video Link
	----------------------------------- */
	jQuery(".pt-blog .blog-item .thumbnail .btn-play").magnificPopup({
		type: "iframe"
	});
	
	/* -----------------------------------
	    13. Validate Contact Form
	----------------------------------- */
	if (jQuery("#contact-form").length) {
        jQuery("#contact-form").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },

                email: "required",
				
            },

            messages: {
                name: "لطفا نام خود را وارد کنید",
                email: "لطفا ایمیل خود را وارد کنید"
            },

            submitHandler: function (form) {
                $.ajax({
                    type: "POST",
                    url: "mail.php",
                    data: jQuery(form).serialize(),
                    success: function () {
                        jQuery( "#loader").hide();
                        jQuery( "#success").slideDown( "slow" );
                        setTimeout(function() {
                        jQuery( "#success").slideUp( "slow" );
                        }, 3000);
                        form.reset();
                    },
                    error: function() {
                        jQuery( "#loader").hide();
                        jQuery( "#error").slideDown( "slow" );
                        setTimeout(function() {
                        jQuery( "#error").slideUp( "slow" );
                        }, 3000);
                    }
                });
                return false;
            }

        });
    }
});