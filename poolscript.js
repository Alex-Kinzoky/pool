$(document).ready(function(){
    $('.arrow-up-button').hide();
    $('.menu-block').hide()
    $('.card-help').hide()
    $('.catalog-podmenu').hide()
    
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
                if($(window).scrollTop() > 500) {
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
        $('.help-form').hide();
        return false;
    });
    $('.return-site').click(function(){
        $(location).attr('href','index.html');
    })
    $('.catalog-menu-part').click(function(){
        if ($(this).text() == 'Бассейны'){
            $('.catalog-podmenu-all').hide()
            $('.catalog-podmenu').show()
            $('.pool-c').show()
            $('.catalog-menu-part').css({
                'background' : '#101014'
            })
            $(this).css({
                'background' : '#0044FF'
            })
        }
        if ($(this).text() == 'Химия для бассейнов'){
            $('.catalog-podmenu-all').hide()
            $('.catalog-podmenu').show()
            $('.chemistry').show()
            $('.catalog-menu-part').css({
                'background' : '#101014'
            })
            $(this).css({
                'background' : '#0044FF'
            })
        }
        if ($(this).text() == 'Оборудование'){
            $('.catalog-podmenu-all').hide()
            $('.catalog-podmenu').show()
            $('.equipment').show()
            $('.catalog-menu-part').css({
                'background' : '#101014'
            })
            $(this).css({
                'background' : '#0044FF'
            })
        }
        if ($(this).text() == 'Покрытия для бассейнов'){
            $('.catalog-podmenu-all').hide()
            $('.catalog-podmenu').show()
            $('.coverage').show()
            $('.catalog-menu-part').css({
                'background' : '#101014'
            })
            $(this).css({
                'background' : '#0044FF'
            })
        }
    })
});