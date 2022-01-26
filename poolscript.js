$(document).ready(function(){
    $('.arrow-up-button').hide();
    $('.menu-block').hide()
    $('.card-help').hide()
	$('.menu-button').click(function(){
		$('.menu-block').slideToggle(300, function(){
            $(this).show();
			//$(this).addClass("show")
            //$(this).removeClass("hide")					
		});
		return false;
	});
    $('.menu-block-close').click(function(){
		$('.menu-block').slideToggle(300, function(){
            $(this).hide()
			//$(this).removeClass("show")	
            //$(this).addClass("hide")					
		});
		return false;
	});
    $(function(){
        if ( $(window).width() > 992 ) {
            $(window).scroll(function(){
                if($(window).scrollTop() > 300) {
                    $('.arrow-up-button').show();
                } else {
                    $('.arrow-up-button').hide();
                }
            });
        }
        if ( $(window).width() < 640 ) {
            $('.catalog-menu').hide()
            ($('#button-catalog').click(function(){
                if ($('.catalog-menu').is(':visible')){
                    $('.catalog-menu').hide()
                } else {
                    $('.catalog-menu').show()
                }
            }));
        } else {
            $('.catalog-menu').show()
        }
    });
     
    $('.arrow-up-button').click(function(){
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
    });
    $('.help-button').click(function(){
        $('.card-help').show();
        return false;
    });
    $('.return-site').click(function(){
        $(location).attr('href','index.html');
    })
});