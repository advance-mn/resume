
function main() {

(function () {
   'use strict';

    // for skill chat jquary
    $(document).ready(function(e) {
        //var windowBottom = $(window).height();
        var index = 0;
        $(document).scroll(function() {
                var top = $('.technical').height() - $(window).scrollTop();
                var width = $('.technical').width();

                if (width > 768) {
                    var topMax = 100;
                }
                else{
                	topMax = 1500;
                }
                if (top < topMax) {
                    if (index == 0) {

                        $('.chart').easyPieChart({
                            easing: 'easeOutBounce',
                            onStep: function(from, to, percent) {
                                $(this.el).find('.percent').text(Math.round(percent));
                            }
                        });

                    }
                    index++;
                }
            })
            //console.log(nagativeValue)
    });


$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});


  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });


    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })

  	$(document).ready(function() {
  	    $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        });

  	});


    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	

	$(document).ready(function( $ ) {
		if($("span.count").length > 0){	
			$('span.count').counterUp({
				delay: 10,
				time: 1000
			});
		}
	});
}());


}
main();